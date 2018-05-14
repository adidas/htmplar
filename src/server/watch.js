/**
 * watch
 **/

const defaultCfg = require('../../.htmplarrc.json');
const {output, source} = require('rc')('htmplar', defaultCfg);
const nodemon = require('nodemon');
const path = require('path');

const watch = () => {
    nodemon({
        exec: 'node ./node_modules/.bin/htmplar build && node ./node_modules/.bin/htmplar serve',
        watch: [path.join(process.cwd(), source), path.join(process.cwd(), output)]
    });
};

module.exports = watch;

