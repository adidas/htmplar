"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cfg = void 0;

var _rc = _interopRequireDefault(require("rc"));

var _htmplarrc = _interopRequireDefault(require("../.htmplarrc.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // htmplar-react utils


const cfg = (0, _rc.default)('htmplar', _htmplarrc.default);
exports.cfg = cfg;