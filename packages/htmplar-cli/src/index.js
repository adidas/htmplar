#!/usr/bin/env node

import { logger } from './utils';
import cli from './options';

try {
  cli(process.argv);
} catch (err) {
  logger.error(err);
  process.exit(1);
}
