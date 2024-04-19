"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// line

const Line = props => {
  const {
    className,
    thickness
  } = props;
  return /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-line-outer', className),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "htmplar-line-container"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "htmplar-line-inner",
    border: "0",
    cellPadding: 0,
    cellSpacing: 0
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "htmplar-rule-container"
  }, /*#__PURE__*/_react.default.createElement("hr", {
    className: (0, _classnames.default)('htmplar-horizontal-rule', {
      'htmplar-thin-line': thickness === 'thin',
      'htmplar-medium-line': thickness === 'medium',
      'htmplar-thick-line': thickness === 'thick'
    })
  })))))));
};
Line.defaultProps = {
  className: '',
  thickness: 'thin'
};
Line.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  thickness: _propTypes.default.string
};
var _default = exports.default = Line;