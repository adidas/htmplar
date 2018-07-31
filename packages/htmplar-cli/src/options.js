// options

import commander from 'commander';
import pkg from '../package.json';
import { logger } from './utils';

commander
    .version(`htmplar ${ pkg.version }`, '-v, --version');

commander
    .option('-c, --config [file]', 'Templat config file');

commander
    .command('transform')
    .alias('t')
    .description('renders the components to html files')
    .option('-s, --source [dir]', 'Path for the source files')
    .option('-o, --output [dir]', 'Path for the output files')
    .action((options) => {
      logger.log(options.source);
      logger.log(options.output);
      logger.log(options.config);
    })
    .on('--help', () => {
      logger.log('Examples:');
    });

commander
    .command('develop')
    .alias('d')
    .description('start the local webserver the development mode')
    .option('-w, --watch [true|false]', 'Starts development mode with file watching which automatically renders with every changes')
    .option('-l, --lint [true|false]', 'Apply linting rules when a file change happens');

commander
    .command('serve')
    .alias('s')
    .description('starts the local webserver on read-only mode');

const cli = (args) => {
  commander.parse(args);
};

export default cli;
