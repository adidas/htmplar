"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _column = _interopRequireDefault(require("./column"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// row

const Row = props => {
  const {
    columns,
    children,
    className,
    valign,
    cellClasses
  } = props;
  let cells = columns || children;
  cells = Array.isArray(cells) ? cells : [cells];
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: (0, _classnames.default)('htmplar-row', className)
  }, cells.map((cell, index) => {
    const _className = cell.props && cell.props.className ? `${cell.props.className}-parent` : '';
    return /*#__PURE__*/_react.default.createElement(_column.default, {
      key: index,
      valign: valign,
      className: _className,
      cellClasses: cellClasses
    }, cell);
  }));
};
Row.defaultProps = {
  valign: 'top',
  cellClasses: ''
};
Row.propTypes = {
  columns: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]),
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  cellClasses: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  valign: _propTypes.default.string
};
var _default = exports.default = Row;