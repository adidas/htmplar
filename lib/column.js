"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * column
 **/
const Column = props => {
  const {
    children,
    valign
  } = props;
  return _react.default.createElement("td", {
    valign: valign,
    className: "htmplar-block-inner htmplar-cell"
  }, children);
};

Column.defaultProps = {
  valign: 'top'
};
Column.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.symbol, _propTypes.default.func, _propTypes.default.array, _propTypes.default.string]).isRequired,
  valign: _propTypes.default.string
};
var _default = Column;
exports.default = _default;