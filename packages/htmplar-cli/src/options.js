"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commander = _interopRequireDefault(require("commander"));

var _package = _interopRequireDefault(require("../package.json"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// options
_commander.default.version(`htmplar ${_package.default.version}`, '-v, --version');

_commander.default.option('-c, --config', 'View config file');

_commander.default.command('transform').alias('t').description('renders the components to html files').option('-s, --source [dir]', 'Path for the source files').option('-o, --output [dir]', 'Path for the output files');

_commander.default.command('develop').alias('d').description('start the local webserver the development mode').option('-w, --watch [true|false]', 'Starts development mode with file watching which automatically renders with every changes').option('-l, --lint [true|false]', 'Apply linting rules when a file change happens');

_commander.default.command('serve').alias('s').description('starts the local webserver on read-only mode').option('-p, --port [port]', 'Server port, default 3000');

const cli = args => {
  _commander.default.parse(args);

  if (_commander.default.config) {
    _utils.logger.info('Current HTMplar config', _utils.cfg);
  }
};

var _default = cli;
exports.default = _default;