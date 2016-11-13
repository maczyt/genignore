/**
 * Module dependencies
 * @private
 */
var fs = require('fs');
var path = require('path');
var colors = require('colors');

/**
 * Module variables
 * @private
 */
var join = path.join;

/**
 * Command collections
 * @private
 */
var collection = require('./fileName');

/**
 * User input command list
 * for find user's require files
 * @private
 */ 
var lists = [];

/**
 * Gitignore content 
 * @private
 */
var ignoreStr = '';

/**
 * Generate functions
 * @param{String|Array} dirPath, fileName list
 */
function generate(p, arr) {
    arr.forEach(function(d) {    
        var reg = new RegExp(d, 'i');
        collection.forEach(function(inner) {
            if (reg.test(inner)) lists.push(inner);
        });
    });    
    
    /**
     * Create a .gitignore file
     * loop through the file list
     * read each file and copy it's content
     * to .gitignore file
     */
    lists.forEach(function(file) {
        var _p = join(p, join('static', file));
        var data = '';
        try {
            data = fs.readFileSync(_p, 'utf8');    
        } catch(err) {
            console.log('  '+err.message.bold.red);
        }
        ignoreStr += data;
    });

    fs.writeFile(path.join(process.cwd(), '.gitignore'), ignoreStr, 'utf8', function (err) {
        if (err) throw err;
        console.log(('  Init a gitignore file. \n  Include: ['+arr.join(', ')+']').bold.green);
});
}

/**
 * Module exports
 * @public
 */
module.exports = generate;
