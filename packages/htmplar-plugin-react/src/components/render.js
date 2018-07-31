// template

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

const replaceAll = (str, target, replacement) => {
  let _str = '';

  if (Array.isArray(target) && typeof replacement === 'undefined') {
    target.forEach((item) => {
      _str = str.replace(new RegExp(item[0], 'g'), item[1]);
    });
  } else {
    _str.replace(new RegExp(target, 'g'), replacement);
  }

  return _str;
};

const render = (Component) => {
  const sheet = new ServerStyleSheet();
  const renderedComponent =
        replaceAll(
          renderToStaticMarkup(sheet.collectStyles(<Component />)),
          [
            [ '&lt;', '<' ],
            [ '&gt;', '>' ],
            [ '=&quot;([a-zA-Z0-9;:\\-.\\/\\(\\)]+)&quot;', '="$1"' ]
          ]
        );
  const renderedStyles = sheet.getStyleTags();

  return {
    renderedComponent,
    renderedStyles
  };
};

const templateHtml = (body, styles, baseStyles) => {
  const _styles = baseStyles();

  return `
        <!DOCTYPE html>
        <html>
            <head>
                <!--[if gte mso 15]>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style id="base-styles">
                    ${ _styles.defaultStyles }
                </style>
                <style id="template-styles">
                    ${ _styles.templateStyles }
                </style>
                ${ styles }
            </head>
            <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
                <center>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" id="body">
                        <tr>
                            <td class="center" align="center" valign="top">
                                ${ body }
                            </td>
                        </tr>
                    </table>
                </center>
            </body>
        </html>
    `;
};

const blockHtml = (body, styles, baseStyles) => {
  const _styles = baseStyles();

  return `
        <style class="base-styles">
            ${ _styles.defaultStyles }
        </style>
        <style class="template-styles">
            ${ _styles.templateStyles }
        </style>
        ${ styles }
        ${ body }
    `;
};

export const template = (baseStyles) => (SingleTemplate) => {
  const { renderedComponent: body, renderedStyles: styles } = render(SingleTemplate);

  return templateHtml(body, styles, baseStyles);
};

export const contentBlock = (baseStyles) => (SingleBlock) => {
  const { renderedComponent: body, renderedStyles: styles } = render(SingleBlock);

  return blockHtml(body, styles, baseStyles);
};
