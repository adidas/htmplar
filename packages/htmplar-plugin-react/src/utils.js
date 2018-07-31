// utils

import fs from 'fs';
import rc from 'rc';
import defaults from '../.htmplarrc.json';

const { defaultCss } = rc('htmplar', defaults);

const getDefaultStyles = () => fs.readFileSync(`${ __dirname }/base.css`);

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

const setMedium = (medium) => {
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

const createID = (component) =>
  `htmplar-${ Buffer.from(
    JSON.stringify(component).split('').sort(() => '0.5' - Math.random()).join('')
  ).toString('base64').substring(0, '12') }`;

const slugify = (str) => {
  let _str = str.replace(/^\s+|\s+$/g, '').toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i++) {
    _str = _str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  _str = _str
      .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

  return str;
};

export {
  getBaseStyles,
  setMedium,
  createID,
  slugify
};
