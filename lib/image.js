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
  let imageSize = typeof src === 'object' ? '' : 'htmplar-image-all';
  return typeof src === 'object' ? Object.keys(src).map(type => {
    const url = src[type];
    return _react.default.createElement("img", {
      key: type,
      align: align,
      src: url,
      alt: title,
      className: (0, _classnames.default)('htmplar-image', className, 'htmplar-image-' + type)
    });
  }) : _react.default.createElement("img", {
    align: align,
    src: src,
    alt: title,
    className: (0, _classnames.default)('htmplar-image', className, imageSize, availableIn)
  });
};

Image.defaultProps = {
  align: 'center',
  medium: 'both'
};
Image.propTypes = {
  src: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  title: _propTypes.default.string.isRequired,
  align: _propTypes.default.string,
  medium: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Image;
exports.default = _default;