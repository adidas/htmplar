"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * button
 **/
const Button = props => {
  const {
    href,
    children,
    id
  } = props;
  let text,
      icon = null;
  children.forEach((child, index) => {
    if (typeof child === 'string') {
      text = child;
    }

    if (typeof child === 'object') {
      icon = {
        component: child,
        index
      };
    }
  });
  return _react.default.createElement("table", {
    className: "button"
  }, _react.default.createElement("tr", null, icon && icon.index === 0 ? _react.default.createElement("td", {
    className: "button-icon"
  }, icon.component) : '', _react.default.createElement("td", {
    className: "button-text"
  }, _react.default.createElement("a", {
    href: href
  }, text)), icon && icon.index === 1 ? _react.default.createElement("td", {
    className: "button-icon"
  }, icon.component) : ''));
};

var _default = Button;
exports.default = _default;