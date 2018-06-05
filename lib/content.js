"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * content-block
 **/
const Content = props => {
  const {
    name,
    children
  } = props;
  return _react.default.createElement(_react.default.Fragment, null, `<!-- ${name} block starts here! -->`, children, `<!-- ${name} block ends here! -->`);
};

Content.propTypes = {
  name: _propTypes.default.string.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]).isRequired
};
var _default = Content;
exports.default = _default;