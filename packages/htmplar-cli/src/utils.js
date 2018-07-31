// cli utils

import rc from 'rc';
import defaultCfg from '../.htmplarrc.json';

export const cfg = rc('htmplar', defaultCfg);

const { log, info, warn, error } = console;

export const logger = {
  error,
  info,
  log,
  warn
};
