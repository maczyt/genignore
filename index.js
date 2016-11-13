/**
 * Module dependencies
 * @private
 */
var program = require('commander');
var create = require('./lib/create');
var join = require('path').join();

program
    .version('0.0.1')
    .usage('<options...>')
    .arguments('<options...>')
    .description('Generate gitignore file')
    .action(function(options) { 
        /* Command args */
        var args = options.slice();
        create(join(__dirname, '../'), args);
    })
    .parse(process.argv);