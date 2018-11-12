#!/usr/bin/env node

const { logger } = require('./utils');
const cli = require('./options');

try {
  cli(process.argv);
} catch (err) {
  logger.error(err);
  process.exit(1);
}
