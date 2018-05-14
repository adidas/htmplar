/**
 * index
 **/

const defaultCfg = require('../../.htmplarrc.json');
const {output, assets, server} = require('rc')('htmplar', defaultCfg);
const path = require('path')
const express = require('express');
const page = require('./page');

const start = () => {
    const app = express();

    console.log('start');

    app.use(express.static(path.join(process.cwd(), output)));
    app.use(express.static(path.join(process.cwd(), assets)));

    app.get('/', (req, res) => {
        res.status(200);
    });

    app.listen(server.port || 3000);
};

module.exports = {
    start
};