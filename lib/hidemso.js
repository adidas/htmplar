"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * hide in mso
 **/
const HideMSO = props => {
  const {
    children
  } = props;
  return _react.default.createElement(_react.default.Fragment, null, `<!--[if !mso]><!-- -->`, _react.default.createElement("div", {
    className: "htmplar-hide-in-mso"
  }, children), `<!--<![endif]-->`);
};

HideMSO.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]).isRequired
};
var _default = HideMSO;
exports.default = _default;