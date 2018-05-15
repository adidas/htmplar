/**
 * index
 **/

const walker = require('./walker');
const write = require('./write');
const parse = require('./parse');

module.exports = {
    walkSync: walker.walkSync,
    store: write.store,
    createCliArgs: parse.createCliArgs
};