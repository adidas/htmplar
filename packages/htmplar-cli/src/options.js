#!/usr/bin/env node

// options

const commander = require('commander');
const pkg = require('../package.json');

commander
    .version(`htmplar ${ pkg.version }`, '-v, --version');

commander
    .command('transform')
    .alias('t')
    .description('renders the components to html files')
    .option('-s, --source [dir]', 'Path for the source files')
    .option('-o, --output [dir]', 'Path for the output files')
    .action(options => {
        console.log(options.source);
        console.log(options.output);
    })
    .on('--help', () => {
        console.log('Examples:');
    });

commander.parse(process.argv);
