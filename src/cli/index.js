#!/usr/bin/env node

/* cli */

const defaultCfg = require('../../.htmplarrc.json');
const {server} = require('rc')('htmplar', defaultCfg);
const [, , ...args] = process.argv;
const {welcome, info, success} = require('./log');

const build = require('../build');
const app = require('../server');
const watch = require('../server/watch');

if (!args.length) {
    welcome();
}
else {
    const [command, ...options] = args;

    switch (command) {
        case 'build':
            info('Converting files');
            build();
            success('Templates converted to HTMLs');
            break;
        case 'dev':
            info('Development server starting');
            watch();
            info(`Server started. You can view your files at http://localhost:${server.port}`);
            break;
        case 'serve':
            info('Server starting');
            app.start();
            info(`Server started. You can view your files at http://localhost:${server.port}`);
            break;
    }
}