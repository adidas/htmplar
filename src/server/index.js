/**
 * index
 **/

const {config: {output, assets, server}} = require('../utils');
const path = require('path');
const express = require('express');
//const page = require('./page');

const start = () => {
    const app = express();

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