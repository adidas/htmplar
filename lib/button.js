"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * button
 **/
const Button = props => {
  const {
    href,
    children,
    id,
    isBlock,
    className
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
    className: (0, _classnames.default)('htmplar-button', className),
    id: id
  }, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "htmplar-button-container htmplar-cell"
  }, _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-button-inner', {
      'htmplar-button-block': isBlock
    })
  }, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "htmplar-button-content htmplar-cell"
  }, _react.default.createElement("a", {
    href: href,
    className: "htmplar-button-cta"
  }, icon && icon.index === 0 ? _react.default.createElement("span", {
    className: "htmplar-button-icon"
  }, icon.component) : '', _react.default.createElement("span", {
    className: "htmplar-button-text"
  }, text), icon && icon.index === 1 ? _react.default.createElement("span", {
    className: "htmplar-button-icon"
  }, icon.component) : '')))))));
};

Button.defaultProps = {
  isBlock: false,
  className: false
};
Button.propTypes = {
  href: _propTypes.default.string.isRequired,
  children: _propTypes.default.array,
  id: _propTypes.default.string,
  isBlock: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;