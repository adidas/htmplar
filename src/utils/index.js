/**
 * index
 **/

const walker = require('./walker');
const write = require('./write');

module.exports = {
    walkSync: walker.walkSync,
    store: write.store
};