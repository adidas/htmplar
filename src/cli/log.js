/**
 * log
 **/

const chalk = require('chalk');
const figlet = require('figlet');

const logs = [
    {name: 'info', message: [chalk.blue('info')]},
    {name: 'success', message: ['🎉', chalk.green('success')]},
    {name: 'error', message: [chalk.red('error')]}
];

const log = (...args) => {
    console.log(...args);
};

const info = (...message) => {
    log(chalk.blue('info'), ...message);
};

const success = (...message) => {
    log('🎉', chalk.green('success'), ...message);
};

const error = (...message) => {
    log(chalk.red('error'), ...message);
};

const welcome = () => {
    log(
        chalk.yellow(
            figlet.textSync('htmplar', {horizontalLayout: 'full'})
        )
    );
};

module.exports = {
    welcome,
    info,
    success,
    error
};