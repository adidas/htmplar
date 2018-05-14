/**
 * page
 **/

const defaultCfg = require('../../.htmplarrc.json');
const {output} = require('rc')('htmplar', defaultCfg);
const {walkSync} = require('../utils');

const page = () => {
    const files = walkSync(output);

    return files;
};

module.exports = page;