"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _column = _interopRequireDefault(require("./column"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * row
 **/
const Row = props => {
  const {
    columns,
    children
  } = props;
  let cells = columns || children;
  cells = Array.isArray(cells) ? cells : [cells];
  return _react.default.createElement("tr", null, cells.map((cell, index) => {
    return _react.default.createElement(_column.default, {
      key: index
    }, cell);
  }));
};

var _default = Row;
exports.default = _default;