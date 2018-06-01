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
 * image
 **/
const Image = props => {
  const {
    src,
    align,
    className,
    title,
    medium
  } = props;
  let availableIn = (0, _utils.setMedium)(medium);
  return _react.default.createElement("img", {
    align: align,
    src: src,
    alt: title,
    className: (0, _classnames.default)('htmplar-image', className, availableIn)
  });
};

Image.defaultProps = {
  align: 'center',
  medium: 'both'
};
Image.propTypes = {
  src: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  align: _propTypes.default.string,
  medium: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Image;
exports.default = _default;