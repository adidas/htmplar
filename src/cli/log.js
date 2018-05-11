/**
 * log
 **/

const chalk = require('chalk');
const figlet = require('figlet');

const log = (...args) => {
    console.log(...args);
};

const welcome = () => {
    console.log(
        chalk.yellow(
            figlet.textSync('htmplar', {horizontalLayout: 'full'})
        )
    );
};

module.exports = {
    welcome,
    log
};