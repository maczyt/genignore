/**
 * Module dependencies
 * @private
 */

var fs = require('fs');
var join = require('path').join;

/**
 * Module exports
 * @public
 */

var collection = fs.readdirSync(join(__dirname, '../static'));
module.exports = collection;
