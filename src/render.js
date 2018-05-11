/**
 * template
 **/

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components';

const render = Component => {
    const sheet = new ServerStyleSheet();
    const renderedComponent = renderToStaticMarkup(sheet.collectStyles(<Component />));
    const renderedStyles = sheet.getStyleTags();

    return {
        renderedComponent,
        renderedStyles
    };
};

const template = (options) => SingleTemplate => {
    const {renderedComponent: body, renderedStyles: styles} = render(SingleTemplate);

    return templateHtml(body, styles, options);
};

const contentBlock = SingleBlock => {
    const {renderedComponent: body, renderedStyles: styles} = render(SingleBlock);

    return blockHtml(body, styles);
};

const templateHtml = (body, styles, options = {title: 'Email'}) => `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${options.title}</title>
                ${styles}
            </head>
            <body>
                ${body}
            </body>
        </html>
    `;

const blockHtml = (body, styles) => `
        ${styles}
        ${body}
    `;

export {
    template,
    contentBlock
};