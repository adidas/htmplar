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
 * link
 **/
const Link = props => {
  const {
    href,
    label,
    id,
    className,
    align,
    children
  } = props;
  const linkLabel = label || children;
  return _react.default.createElement("table", {
    align: align,
    className: (0, _classnames.default)('htmplar-link', className)
  }, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("a", {
    href: href,
    id: id
  }, linkLabel))));
};

Link.defaultProps = {
  align: 'center',
  href: '#'
};
Link.propTypes = {
  href: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  id: _propTypes.default.string.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  align: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Link;
exports.default = _default;