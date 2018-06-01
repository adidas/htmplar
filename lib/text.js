"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * text
 **/
const Text = props => {
  const {
    className,
    content,
    children,
    medium,
    id
  } = props;
  const text = content || children;
  const availableIn = (0, _utils.setMedium)(medium);
  return _react.default.createElement("p", {
    id: id,
    className: (0, _classnames.default)('htmplar-menu', className, availableIn)
  }, text);
};

Text.defaultProps = {
  className: '',
  medium: 'both',
  id: ''
};
Text.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  id: _propTypes.default.string,
  medium: _propTypes.default.string,
  content: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string])
};
var _default = Text;
exports.default = _default;