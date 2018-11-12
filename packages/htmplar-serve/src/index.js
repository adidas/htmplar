// htmplar server

import path from 'path';
import { STATUS_CODES } from 'http';
import express from 'express';
import { cfg } from './utils';
import pages from './page';

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

  app.get('/', (req, res) => {
    res.status(STATUS_CODES[200]).send(
      `
      <title>HTMplar</title>
      <div style="background: #fff; font: 16px/1.25 AdiHaus, Helvetica, Arial, sans-serif;">
        <div style="width: 100%; max-width: 640px !important; margin: auto;"
            class="htmplar-landing-page">
          <h1 style="margin: 32px 8px;"
              class="htmplar-landing-page-title">
            My Email Templates
          </h1>
          <ul style="list-style-type: none; padding: 0; margin: 0"
              class="htmplar-landing-page-pages-list">
            ${ pages.join('\n') }
          </ul>
        </div>
      </div>
      `
    );
  });

  app.listen(server.port || defaultPort);
};

exports.start = start;
