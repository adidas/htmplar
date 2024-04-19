"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// button

const Button = props => {
  const {
    href,
    children,
    id,
    isBlock,
    className,
    allCaps,
    medium,
    align
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);
  let items = children;
  let icon = null;
  let text;
  if (typeof children === 'string') {
    items = [items];
  }
  items.forEach((child, index) => {
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
  const _id = id === '' ? (0, _utils.slugify)(text || (0, _utils.createID)(props)) : id;
  return /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-button', className, availableIn, {
      'htmplar-all-caps': allCaps,
      'htmplar-button-block': isBlock
    }),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    id: _id,
    align: align
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "htmplar-button-container htmplar-cell"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-button-inner'),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "htmplar-button-content htmplar-cell"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, icon && icon.index === 0 ? /*#__PURE__*/_react.default.createElement("td", {
    align: "left"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    className: "htmplar-button-link"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "htmplar-button-icon"
  }, icon.component)), /*#__PURE__*/_react.default.createElement("span", {
    className: "htmplar-button-spacer"
  }, "\xA0")) : '', /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    className: "htmplar-button-link"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "htmplar-button-text"
  }, text))), icon && icon.index === 1 ? /*#__PURE__*/_react.default.createElement("td", {
    align: "right"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    className: "htmplar-button-link"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "htmplar-button-icon"
  }, icon.component))) : ''))))))));
};
Button.defaultProps = {
  isBlock: false,
  allCaps: false,
  medium: 'both'
};
Button.propTypes = {
  href: _propTypes.default.string.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  id: _propTypes.default.string,
  medium: _propTypes.default.string,
  isBlock: _propTypes.default.bool,
  allCaps: _propTypes.default.bool,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array, _propTypes.default.object]),
  align: _propTypes.default.string
};
var _default = exports.default = Button;