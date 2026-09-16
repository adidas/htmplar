#!/usr/bin/env node
import { scaffold } from './scaffold.js';

scaffold().catch((error) => {
  console.error(error);
  process.exit(1);
});
