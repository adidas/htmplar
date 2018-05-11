/**
 * write
 **/

const path = require('path');
const fs = require('fs');

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

    fs.writeFile(path.join(options.dir, options.name), content, error => {
        if (error) {
            console.error(error);
        }
    });
};

module.exports = {
    store
};