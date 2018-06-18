"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentBlock = exports.template = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * template
 **/
const replaceAll = (str, target, replacement) => {
  if (Array.isArray(target) && typeof replacement === 'undefined') {
    target.forEach(item => {
      str = str.replace(new RegExp(item[0], 'g'), item[1]);
    });
  } else {
    str.replace(new RegExp(target, 'g'), replacement);
  }

  return str;
};

const render = Component => {
  const sheet = new _styledComponents.ServerStyleSheet();
  const renderedComponent = replaceAll((0, _server.renderToStaticMarkup)(sheet.collectStyles(_react.default.createElement(Component, null))), [['&lt;', '<'], ['&gt;', '>'], ['=&quot;([a-zA-Z0-9;:\\-.\\/\\(\\)]+)&quot;', '="$1"']]);
  const renderedStyles = sheet.getStyleTags();
  return {
    renderedComponent,
    renderedStyles
  };
};

const template = baseStyles => SingleTemplate => {
  const {
    renderedComponent: body,
    renderedStyles: styles
  } = render(SingleTemplate);
  return templateHtml(body, styles, baseStyles);
};

exports.template = template;

const contentBlock = baseStyles => SingleBlock => {
  const {
    renderedComponent: body,
    renderedStyles: styles
  } = render(SingleBlock);
  return blockHtml(body, styles, baseStyles);
};

exports.contentBlock = contentBlock;

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
                    ${_styles.defaultStyles}
                </style>
                <style id="template-styles">
                    ${_styles.templateStyles}
                </style>
                ${styles}
            </head>
            <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
                <center>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" id="body">
                        <tr>
                            <td class="center" align="center" valign="top">
                                ${body}
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
            ${_styles.defaultStyles}
        </style>
        <style class="template-styles">
            ${_styles.templateStyles}
        </style>
        ${styles}
        ${body}
    `;
};