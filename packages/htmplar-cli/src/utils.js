// cli utils

const rc = require('rc');
const defaultCfg = require('../../../.htmplarrc.json');

const cfg = rc('htmplar', defaultCfg);

const { log, info, warn, error } = console;

const logger = {
  error,
  info,
  log,
  warn
};

module.exports = { logger, cfg };
