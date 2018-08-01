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

// block
const Block = props => {
  const {
    children,
    className,
    align,
    valign,
    medium,
    cellClasses,
    isResponsive
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);
  let cellClass = cellClasses;
  let outerClassName = className;

  if (isResponsive) {
    if (typeof cellClasses === 'string') {
      cellClass = `${cellClass} htmplar-mobile-row`.trim();
    } else if (Array.isArray(cellClasses)) {
      cellClass.push('htmplar-mobile-row');
    } else if (typeof cellClasses === 'object') {
      cellClass['htmplar-mobile-row'] = true;
    }
  }

  if (typeof outerClassName === 'string' && outerClassName.length > 0) {
    outerClassName += '-outer';
  }

  if (Array.isArray(outerClassName)) {
    outerClassName = outerClassName.filter(classname => typeof classname !== 'undefined' && classname.length > 0).map(classname => `${classname}-outer`);
  }

  return _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block-outer', outerClassName, availableIn),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    width: "100%"
  }, _react.default.createElement("tr", {
    className: "htmplar-block-outer-row"
  }, _react.default.createElement("td", {
    className: "htmplar-block-container",
    valign: valign
  }, align === 'center' ? `
            <!--[if (gte mso 9)|(IE)]>
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="640" style="width:640px;">
              <tr>
                <td align="center" valign="top" width="640" style="width:640px;">
            <![endif]-->` : '', _react.default.createElement("table", {
    className: (0, _classnames.default)('htmplar-block', className),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0,
    align: align
  }, _react.default.createElement(_row.default, {
    columns: children,
    valign: valign,
    cellClasses: cellClass
  })), align === 'center' ? `
            <!--[if (gte mso 9)|(IE)]>
                </td>
              </tr>
            </table>
            <![endif]-->
            ` : '')));
};

Block.defaultProps = {
  align: 'center',
  valign: 'top',
  medium: false,
  cellClasses: '',
  isResponsive: false
};
Block.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]).isRequired,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  cellClasses: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]),
  align: _propTypes.default.string,
  valign: _propTypes.default.string,
  medium: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  isResponsive: _propTypes.default.bool
};
var _default = Block;
exports.default = _default;