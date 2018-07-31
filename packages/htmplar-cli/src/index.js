#!/usr/bin/env node
"use strict";

var _utils = require("./utils");

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
  (0, _options.default)(process.argv);
} catch (err) {
  _utils.logger.error(err);

  process.exit(1);
}