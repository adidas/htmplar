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

const templateHtml = (body, styles) => `
        <!DOCTYPE html>
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width" />
                ${styles}
            </head>
            <body>
                <table class="body">
                    <tr>
                        <td class="center" align="center" valign="top">
                            ${body}
                        </td>
                    </tr>
                </table>
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