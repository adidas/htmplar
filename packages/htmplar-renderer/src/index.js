// htmplar-renderer

import Module from 'module';
import vm from 'vm';
import path from 'path';
import pretty from 'pretty';
import babel from '@babel/core';
import { cfg } from './utils';

const { renderer, block } = cfg;
const babelPresets = [ '@babel/preset-env' ];

babelPresets.push(`@babel/preset-${ renderer.toLowerCase() }`);

require('@babel/register')({ presets: babelPresets });

const _eval = (file) => {
  if (!file) {
    return false;
  }

  const stream = [
    `import ${ renderer } from '${ renderer.toLowerCase() }';`,
    `import Component from  '${ path.join(process.cwd(), file) }';`
  ];

  if (file.includes(`/${ block.prefix }`)) {
    stream.push(`import {contentBlock, getBaseStyles} from 'htmplar-${ renderer.toLowerCase() }';`);
    stream.push('contentBlock(getBaseStyles)(Component);');
  } else {
    stream.push(`import {template, getBaseStyles} from 'htmplar-${ renderer.toLowerCase() }';`);
    stream.push('template(getBaseStyles)(Component);');
  }

  const { code } = babel.transform(stream.join('\n'), {
    filename: file,
    presets: babelPresets
  });

  return vm.runInThisContext(code, {
    filename: file
  });
};

export const transform = (file) => {
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
