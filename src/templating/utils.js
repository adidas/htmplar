/**
 * utils
 **/

const fs = require('fs');
const {config: {defaultCss}} = require('../src/utils');

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
        JSON.stringify(component).split('').sort(() => 0.5 - Math.random()).join('')
    ).toString('base64').substring(0, 12)}`;

const slugify = str => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
};

export {
    getBaseStyles,
    setMedium,
    createID,
    slugify
};