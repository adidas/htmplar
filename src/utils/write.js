/**
 * write
 **/

const defaultCfg = require('../../.htmplarrc.json');
const {logs} = require('rc')('htmplar', defaultCfg);
const path = require('path');
const fs = require('fs');
const {info, error} = require('../cli/log');

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

const store = (content, options) => {
    createPath(options.dir);

    fs.writeFile(path.join(options.dir, options.name), content, err => {
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