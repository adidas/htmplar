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
const render = Component => {
  const sheet = new _styledComponents.ServerStyleSheet();
  const renderedComponent = (0, _server.renderToStaticMarkup)(sheet.collectStyles(_react.default.createElement(Component, null)));
  const renderedStyles = sheet.getStyleTags();
  return {
    renderedComponent,
    renderedStyles
  };
};

const template = options => SingleTemplate => {
  const {
    renderedComponent: body,
    renderedStyles: styles
  } = render(SingleTemplate);
  return templateHtml(body, styles, options);
};

exports.template = template;

const contentBlock = SingleBlock => {
  const {
    renderedComponent: body,
    renderedStyles: styles
  } = render(SingleBlock);
  return blockHtml(body, styles);
};

exports.contentBlock = contentBlock;

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