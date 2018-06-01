"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _link = _interopRequireDefault(require("./link"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * menu
 **/
const Menu = props => {
  const {
    items,
    className,
    align,
    medium
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);
  return _react.default.createElement("table", {
    align: align,
    className: (0, _classnames.default)('htmplar-menu', className, availableIn)
  }, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "htmplar-menu-container"
  }, items.map((item, index) => {
    const {
      link,
      label,
      id,
      medium
    } = item;
    return _react.default.createElement(_link.default, {
      key: index,
      href: link,
      id: id,
      label: label,
      align: "left",
      medium: medium
    });
  }))));
};

Menu.defaultProps = {
  align: 'center',
  medium: 'both'
};
Menu.propTypes = {
  items: _propTypes.default.array.isRequired,
  align: _propTypes.default.string,
  medium: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array])
};
var _default = Menu;
exports.default = _default;