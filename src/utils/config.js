// config

const rc = require('rc');
const defaultCfg = require('../../.htmplarrc.json');

const config = rc('htmplar', defaultCfg);

module.exports = config;
