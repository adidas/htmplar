// walker

const fs = require('fs');
const path = require('path');
const { exclude } = require('./config');

const walkSync = (dir, filelist = []) => {
  let _filelist = filelist;
  const dirPath = process.platform === 'win32' ? dir.replace(/\\/g, '/') : dir;

  if (exclude.length <= 0 || !exclude.includes(dirPath)) {
    fs.readdirSync(dir).forEach(file => {
      _filelist =
        fs.statSync(path.join(dir, file)).isDirectory() ?
          walkSync(path.join(dir, file), _filelist)
        : _filelist.concat({ dir, file, path: path.join(dir, file) });
    });
  }

  return _filelist;
};

module.exports = {
  walkSync
};
