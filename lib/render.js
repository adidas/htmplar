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
var render = function render(Component) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var renderedComponent = (0, _server.renderToStaticMarkup)(sheet.collectStyles(_react.default.createElement(Component, null)));
  var renderedStyles = sheet.getStyleTags();
  return {
    renderedComponent: renderedComponent,
    renderedStyles: renderedStyles
  };
};

var template = function template(options) {
  return function (SingleTemplate) {
    var _render = render(SingleTemplate),
        body = _render.renderedComponent,
        styles = _render.renderedStyles;

    return templateHtml(body, styles, options);
  };
};

exports.template = template;

var contentBlock = function contentBlock(SingleBlock) {
  var _render2 = render(SingleBlock),
      body = _render2.renderedComponent,
      styles = _render2.renderedStyles;

  return blockHtml(body, styles);
};

exports.contentBlock = contentBlock;

var templateHtml = function templateHtml(body, styles) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    title: 'Email'
  };
  return "\n        <!DOCTYPE html>\n        <html>\n            <head>\n                <title>".concat(options.title, "</title>\n                ").concat(styles, "\n            </head>\n            <body>\n                ").concat(body, "\n            </body>\n        </html>\n    ");
};

var blockHtml = function blockHtml(body, styles) {
  return "\n        ".concat(styles, "\n        ").concat(body, "\n    ");
};
