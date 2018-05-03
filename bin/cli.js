#!/usr/bin/env node
var program = require('commander');
var async = require('async');
var Metalsmith = require('metalsmith');
var prompt = require('cli-prompt');
var render = require('consolidate').handlebars.render;
var shell = require('shelljs');
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

function ask(files, metalsmith, done){
  var prompts = ['ViewName'];
  var metadata = metalsmith.metadata();

  async.eachSeries(prompts, run, done);
  function run(key, done){
    prompt('  ' + key + ': ', function(val){
      val = title(val);
      key === 'ViewName' && (view_name = val);
      metadata[key] = val;
      done();
    });
  }
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
