"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * image
 **/
const Image = props => {
  const {
    src,
    align,
    className
  } = props;
  return _react.default.createElement("img", {
    align: align,
    src: src,
    className: (0, _classnames.default)('htmplar-image', className)
  });
};

Image.defaultProps = {
  align: 'center'
};
Image.propTypes = {
  src: _propTypes.default.string.isRequired,
  align: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Image;
exports.default = _default;