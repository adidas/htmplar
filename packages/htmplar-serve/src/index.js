"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _utils = require("./utils");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // htmplar server


const start = () => {
  const defaultPort = 3000;
  const {
    output,
    assets,
    server
  } = _utils.cfg;
  const app = (0, _express.default)();
  const appRoot = process.cwd();
  app.use(_express.default.static(_path.default.join(appRoot, output)));
  app.use(_express.default.static(_path.default.join(appRoot, assets)));
  app.listen(server.port || defaultPort);
};

exports.start = start;