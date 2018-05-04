#!/usr/bin/env node
var program = require('commander');
var async = require('async');
var Metalsmith = require('metalsmith');
var render = require('consolidate').handlebars.render;
var shell = require('shelljs');
var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');

var view_name = '';
program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-v, --views', 'create views')
  .parse(process.argv);

if (program.views) {
  var metalsmith = Metalsmith(__dirname)
  .source('../template/views')            // source directory
  .destination('../build')
  .clean(true)
  .use(ask)
  .use(template)
  .build(function(err){
    if (err) throw err;
    shell.exec(`mkdir ./src/routers/${view_name}`)
    shell.exec(`cp -rf ./build/* ./src/routers/${view_name}/`)
    shell.exec(`rm -rf ./build`)
  });
}

function title(str) {
  return str.substring(0,1).toUpperCase()+str.substring(1);
}

function check_dir_existsSync(path) {
  return fs.existsSync(path);
}

function ask(files, metalsmith, done) {
  var questions = [
    {
      type: 'input',
      name: 'ViewName',
      message: 'What is view name ?',
      validate: function(value) {
        const maybe_destination_path = path.resolve(__dirname,`../src/routers/${value}`)
        if (check_dir_existsSync(maybe_destination_path)) {
          return `View ${value} had been used.Please use other name.`
        }
       return !!value || 'Please enter a right view name.'
      },
      filter: String,
    }
  ];
  inquirer.prompt(questions).then(answers => {
    var metadata = metalsmith.metadata();
    for(let key in answers) {
      if (key === 'ViewName') {
        answers[key] = title(answers[key]);
        view_name = answers[key]
      }
      metadata[key] = answers[key];
    }
    done();
  });
}

function template(files, metalsmith, done){
  var keys = Object.keys(files);
  var metadata = metalsmith.metadata();

  async.each(keys, run, done);

  function run(file, done){
    var str = files[file].contents.toString();
    render(str, metadata, function(err, res){
      if (err) return done(err);
      files[file].contents = new Buffer(res);
      done();
    });
  }
}
