"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _row = _interopRequireDefault(require("./row"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * block
 **/
const Block = props => {
  const {
    children,
    className,
    align,
    valign,
    medium
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);
  return _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block-outer', className, availableIn),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%"
  }, _react.default.createElement("tr", {
    className: "htmplar-block-outer-row"
  }, _react.default.createElement("td", {
    className: "htmplar-block-container",
    valign: valign
  }, _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block', className),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    align: align
  }, _react.default.createElement(_row.default, {
    columns: children,
    valign: valign
  })))));
};

Block.defaultProps = {
  align: 'center',
  valign: 'top',
  medium: false
};
Block.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]).isRequired,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  align: _propTypes.default.string,
  valign: _propTypes.default.string,
  medium: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool])
};
var _default = Block;
exports.default = _default;