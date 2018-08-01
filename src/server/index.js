// index

const path = require('path');
const express = require('express');
const { config: { output, assets, server } } = require('../utils');
const pages = require('./page');

const PORT = 3000;
const STATUS_OK = 200;

const start = () => {
  const app = express();

  app.use(express.static(path.join(process.cwd(), output)));
  app.use(express.static(path.join(process.cwd(), assets)));

  app.get('/', (req, res) => {
    res.status(STATUS_OK).send(
      `
      <title>HTMplar</title>
        <div style="background: #fff; font: 16px/1.25 AdiHaus, Helvetica, Arial, sans-serif;">
        <div style="width: 100%; max-width: 640px !important; margin: auto;"
            class="htmplar-landing-page">
          <h1 style="margin: 32px 16px;"
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

  app.listen(server.port || PORT);
};

module.exports = {
  start
};
