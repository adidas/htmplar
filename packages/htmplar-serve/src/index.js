// htmplar server

import path from 'path';
import express from 'express';
import { cfg } from './utils';

const start = () => {
  const defaultPort = 3000;
  const {
    output,
    assets,
    server
  } = cfg;
  const app = express();
  const appRoot = process.cwd();

  app.use(express.static(path.join(appRoot, output)));
  app.use(express.static(path.join(appRoot, assets)));
  app.listen(server.port || defaultPort);
};

exports.start = start;
