"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaseStyles = void 0;

/**
 * utils
 **/
const fs = require('fs');

const {
  config: {
    defaultCss
  }
} = require('../src/utils');

const getDefaultStyles = () => {
  return fs.readFileSync(__dirname + '/base.css');
};

const getTemplateDefaultStyles = () => {
  if (defaultCss && defaultCss !== 'false') {
    return fs.readFileSync(defaultCss);
  }

  return '';
};

const getBaseStyles = () => {
  const defaultStyles = getDefaultStyles();
  const templateStyles = getTemplateDefaultStyles();
  return {
    defaultStyles,
    templateStyles
  };
};

exports.getBaseStyles = getBaseStyles;