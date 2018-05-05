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
  .description('View generater')
  .option('-i, --init', 'create views')
  .parse(process.argv);

if (program.init) {
  var metalsmith = Metalsmith(__dirname)
  .source('../template')
  .destination('../build')
  .clean(true)
  .use(ask)
  .use(template)
  .build(function(err){
    if (err) throw err;
    var project_name = process.argv.pop();
    var project_path = path.resolve(process.cwd(), project_name);
    var source_path = path.resolve(__dirname, '../build/*');
    shell.exec(`mkdir ${project_path}`);
    shell.exec(`cp -rf ${source_path} ${project_path}`)
  });
}


function check_dir_existsSync(path) {
  return fs.existsSync(path);
}

function ask(files, metalsmith, done) {
  var questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is Project name ?',
      filter: String,
    },
    {
      type: 'input',
      name: 'version',
      message: 'What is Project version ?',
      filter: String,
      default: '0.0.1',
    },
    {
      type: 'author',
      name: 'name',
      message: 'who is Project author ?',
      filter: String,
      default: 'tsspa'
    }
  ];
  inquirer.prompt(questions).then(answers => {
    var metadata = metalsmith.metadata();
    metadata = answers;
    done();
  });
}

function template(files, metalsmith, done){
  var keys = Object.keys(files);
  var metadata = metalsmith.metadata();

  async.each(keys, run, done);

  function run(file, done){
    var img_reg = /(jpg|png|svg)$/;
    if (img_reg.test(file)) { return done(); }
    var str = files[file].contents.toString();
    render(str, metadata, function(err, res){
      if (err) return done(err);
      files[file].contents = new Buffer(res);
      done();
    });
  }
}
