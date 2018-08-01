// walker

const fs = require('fs');
const path = require('path');
const { exclude } = require('./config');

const walkSync = (dir, filelist = []) => {
    if(exclude.length > 0 && exclude.includes(dir)) {
        return;
    }

    fs.readdirSync(dir).forEach(file => {

        filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? walkSync(path.join(dir, file), filelist)
            : filelist.concat({dir, file, path: path.join(dir, file)});

    });
    return filelist;
};

module.exports = {
  walkSync
};
