"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// column

const Column = props => {
  const {
    children,
    valign,
    cellClasses,
    className
  } = props;
  return /*#__PURE__*/_react.default.createElement("td", {
    valign: valign,
    className: (0, _classnames.default)('htmplar-block-inner htmplar-cell', cellClasses, className)
  }, children);
};
Column.defaultProps = {
  valign: 'top',
  cellClasses: '',
  className: ''
};
Column.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.symbol, _propTypes.default.func, _propTypes.default.array, _propTypes.default.string]).isRequired,
  cellClasses: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  valign: _propTypes.default.string
};
var _default = exports.default = Column;