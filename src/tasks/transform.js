const Module = require('module');
const vm = require('vm');
const path = require('path');
const babel = require('@babel/core');
const pretty = require('pretty');

require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
});

function _eval(file) {
  let result;

  if (file) {
    const stream = [
      'import React from \'react\';',
      `import Component from '${ process.platform === 'win32' ? path.join(process.cwd(), file).replace(/\\/g, '\\\\') : path.join(process.cwd(), file) }';`
    ];

    if (file.includes('/block-')) {
      stream.push('import {contentBlock, getBaseStyles} from \'htmplar\';');
      stream.push('contentBlock(getBaseStyles)(Component);');
    } else {
      stream.push('import {template, getBaseStyles} from \'htmplar\';');
      stream.push('template(getBaseStyles)(Component);');
    }

    const { code } = babel.transform(stream.join('\n'), {
      filename: file,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    });

    result = vm.runInThisContext(code, {
      filename: file
    });
  }

  return result;
}

const transform = (file) => {
  global.__filename = file;
  global.__dirname = process.cwd();

  const module = new Module(global.__filename);

  module.filename = global.__filename;
  module.paths = Module._nodeModulePaths(global.__dirname);

  global.exports = module.exports;
  global.module = module;
  global.require = module.require.bind(module);

  const result = _eval(file, global.__filename);

  return typeof result === 'string' ? pretty(result) : null;
};

module.exports = {
  transform
};
