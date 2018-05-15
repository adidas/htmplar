/**
 * config
 **/

const defaultCfg = require('../../.htmplarrc.json');
const config = require('rc')('htmplar', defaultCfg);

module.exports = config;