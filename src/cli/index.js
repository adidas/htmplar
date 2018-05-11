#!/usr/bin/env node

/* cli */

const [, , ...args] = process.argv;
const chalk = require('chalk');
const {welcome} = require('./log');

const build = require('../build');

if (!args.length) {
    welcome();
}
else {
    const [command, ...options] = args;

    switch (command) {
        case 'build':
            console.log(
                chalk.green('Converting files')
            );
            build();
            break;
    }
}