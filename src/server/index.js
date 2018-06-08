/**
 * index
 **/


const {config: {output, assets, server}} = require('../utils');
const path = require('path');
const express = require('express');
const {pages} = require('./page');

const start = () => {
    const app = express();

    app.use(express.static(path.join(process.cwd(), output)));
    app.use(express.static(path.join(process.cwd(), assets)));

    app.get('/', (req, res) => {
        res.status(200).send(
            '<link rel="stylesheet" type="text/css" href="styles/default.css">\n'+
            '<title>HTMplar</title>\n'+
            '<div class="wrapper">\n'+
                '<h1 class="title">My Email Templates</h1>\n'+
                '<ul class="pages-list">' + pages.join("\n") + '</ul>'+
            '</div>'
        );
    });
  
    app.listen(server.port || 8080);
};

module.exports = {
    start
};