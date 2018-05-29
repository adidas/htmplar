"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _row = _interopRequireDefault(require("./row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * block
 **/
const Block = props => {
  const {
    children,
    className
  } = props;
  return _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block-outer', className),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%"
  }, _react.default.createElement("tr", {
    className: "htmplar-block-outer-row"
  }, _react.default.createElement("td", {
    className: "htmplar-block-container"
  }, _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block', className),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%"
  }, _react.default.createElement(_row.default, {
    columns: children
  })))));
};

Block.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]).isRequired,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Block;
exports.default = _default;