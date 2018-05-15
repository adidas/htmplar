/**
 * index
 **/

const build = require('./build');
const watch = require('./watch');
const {transform} = require('./transform');
const lint = require('./lint');

module.exports = {
    build,
    lint,
    transform,
    watch
};