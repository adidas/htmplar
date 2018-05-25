"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _row = _interopRequireDefault(require("./row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * block
 **/
const Block = props => {
  const {
    children
  } = props;
  return _react.default.createElement("table", {
    className: "htmplar-block",
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%"
  }, _react.default.createElement(_row.default, {
    columns: children
  }));
};

var _default = Block;
exports.default = _default;