// utils

const fs = require('fs');
const path = require('path');
const {
  config: { defaultCss }
} = require('../src/utils');

const SORTING_THRESHOLD = 0.5;
const ID_LENGTH = 12;

const getDefaultStyles = () => fs.readFileSync(path.join(__dirname, '/base.css'));

const getTemplateDefaultStyles = () => (defaultCss && defaultCss !== 'false' ? fs.readFileSync(defaultCss) : '');

const getBaseStyles = () => {
  const defaultStyles = getDefaultStyles();
  const templateStyles = getTemplateDefaultStyles();

  return {
    defaultStyles,
    templateStyles
  };
};

const setMedium = medium => {
  let className = '';

  switch (medium) {
    case 'mobile':
      className = 'htmplar-only-mobile';
      break;
    case 'desktop':
      className = 'htmplar-only-desktop';
      break;
    case 'both':
    default:
      className = '';
      break;
  }

  return className;
};

const createID = component =>
  `htmplar-${Buffer.from(
    JSON.stringify(component)
      .split('')
      .sort(() => SORTING_THRESHOLD - Math.random())
      .join('')
  )
    .toString('base64')
    .substring(0, ID_LENGTH)}`;

const slugify = str => {
  let _str = str.replace(/^\s+|\s+$/g, '').toLowerCase();

  // remove accents, swap ñ for n, etc.
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i++) {
    _str = _str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  // remove invalid characters, collapse whitespace and replace by -, and collapse dashes
  _str = _str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return _str;
};

export { getBaseStyles, setMedium, createID, slugify };
