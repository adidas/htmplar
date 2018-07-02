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
    medium,
    id
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);

  const _id = id === '' ? (0, _utils.createID)(props) : id;

  return _react.default.createElement("table", {
    id: _id,
    align: align,
    className: (0, _classnames.default)('htmplar-menu', className, availableIn),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0
  }, _react.default.createElement("tr", null, items.map((item, index) => {
    const {
      link,
      label,
      id,
      medium
    } = item;
    const itemAvailableIn = (0, _utils.setMedium)(medium);

    const _id = id === '' ? (0, _utils.createID)(item) : id;

    return _react.default.createElement("td", {
      key: index,
      className: (0, _classnames.default)('htmplar-menu-container', itemAvailableIn)
    }, _react.default.createElement("a", {
      href: link,
      id: _id
    }, label));
  })));
};

Menu.defaultProps = {
  align: 'center',
  medium: 'both',
  id: ''
};
Menu.propTypes = {
  items: _propTypes.default.array.isRequired,
  align: _propTypes.default.string,
  medium: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array])
};
var _default = Menu;
exports.default = _default;