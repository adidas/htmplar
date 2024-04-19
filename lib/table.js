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
// table

const Table = props => {
  const {
    className,
    children,
    align,
    valign,
    columns,
    cellClasses,
    isResponsive,
    id
  } = props;
  const cols = columns !== null ? columns : children;
  const _id = id === '' ? (0, _utils.createID)(props) : id;
  let cellClass = cellClasses;
  if (isResponsive) {
    if (typeof cellClasses === 'string') {
      cellClass = `${cellClass} htmplar-mobile-row`.trim();
    } else if (Array.isArray(cellClasses)) {
      cellClass.push('htmplar-mobile-row');
    } else if (typeof cellClasses === 'object') {
      cellClass['htmplar-mobile-row'] = true;
    }
  }
  return /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block', className),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    align: align,
    id: _id
  }, /*#__PURE__*/_react.default.createElement(_row.default, {
    columns: cols,
    valign: valign,
    cellClasses: cellClass
  }));
};
Table.defaultProps = {
  align: 'middle',
  valign: 'top',
  columns: null,
  isResponsive: false,
  id: ''
};
Table.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]),
  columns: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  cellClasses: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  id: _propTypes.default.string,
  align: _propTypes.default.string,
  valign: _propTypes.default.string,
  isResponsive: _propTypes.default.bool
};
var _default = exports.default = Table;