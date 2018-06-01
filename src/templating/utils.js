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

export {
    getBaseStyles,
    setMedium
};