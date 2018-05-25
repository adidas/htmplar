"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * image
 **/
const Image = props => {
  const {
    src
  } = props;
  return _react.default.createElement("img", {
    align: "center",
    src: src,
    className: "htmplar-image"
  });
};

Image.propTypes = {
  src: _propTypes.default.string.isRequired
};
var _default = Image;
exports.default = _default;