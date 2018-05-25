/**
 * write
 **/

const {logs, block} = require('./config');
const path = require('path');
const fs = require('fs');
const {info, error} = require('./log');
const inlineCSS = require('inline-css');

const createPath = dir => {
    let folders = dir.split(path.sep);

    folders.reduce((currentPath, folder) => {
        currentPath += folder + path.sep;
        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath);
        }
        return currentPath;
    }, '');
};

const store = async (content, options) => {
    createPath(options.dir);
    const savePath = path.join(options.dir, options.name);
    let inline = '';

    if (savePath.includes(block.prefix)) {
        inline = await inlineCSS(content, {url: '/'});
    }

    else {
        inline = await inlineCSS(content, {url: '/', removeStyleTags: false});
    }

    fs.writeFile(savePath, inline, err => {
        if (err) {
            error(err);
        }

        if (logs === 'detailed') {
            info(options.name, 'created and saved to:', options.dir);
        }
    });
};

module.exports = {
    store
};