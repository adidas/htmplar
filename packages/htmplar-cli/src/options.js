
// options

const commander = require('commander');
const pkg = require('../package.json');
const { logger, cfg } = require('./utils');

commander
  .version(`htmplar ${ pkg.version }`, '-v, --version');

commander
  .option('-c, --config', 'View config file');

commander
  .command('build')
  .alias('t')
  .description('renders the components to html files')
  .option('-s, --source [dir]', 'Path for the source files')
  .option('-o, --output [dir]', 'Path for the output files')
  .action(() => { console.log('Building files') });

commander
  .command('dev')
  .alias('d')
  .description('start the local webserver the development mode')
  .option('-w, --watch [true|false]', 'Starts development mode with file watching which automatically renders with every changes')
  .option('-l, --lint [true|false]', 'Apply linting rules when a file change happens')
  .action();

commander
  .command('serve')
  .alias('s')
  .description('starts the local webserver on read-only mode')
  .option('-p, --port [port]', 'Server port, default 3000');

const cli = (args) => {
  commander.parse(args);

  if (commander.config) {
    logger.info('Current HTMplar config', cfg);
  }
};

module.exports = cli;
