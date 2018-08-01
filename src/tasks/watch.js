// watch

const path = require('path');
const nodemon = require('nodemon');
const { config: { output, source, assets }, createCliArgs } = require('../utils');

const watch = (linting) => {
  const exec = [
    './node_modules/.bin/htmplar build',
    './node_modules/.bin/htmplar serve'
  ];

  if (typeof linting !== 'undefined' &&
      ((linting === true || Array.isArray(linting)) && linting[0] === true)) {
    const lintingArgs = Array.isArray(linting) ? createCliArgs(linting[1]) : '';

    exec.unshift(`./node_modules/.bin/htmplar lint ${ lintingArgs }`);
  }

  nodemon({
    exec: `node ${ exec.join(' && ') }`,
    watch: [ path.join(process.cwd(), source), path.join(process.cwd(), output), path.join(process.cwd(), assets) ],
    ext: 'js, jsx, mjs, json, css, scss'
  });
};

module.exports = watch;

