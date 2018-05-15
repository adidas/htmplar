#!/usr/bin/env node

/* cli */

const {config: {server, linting, source}} = require('../utils');
const [, , ...args] = process.argv;
const {welcome, info, success} = require('../utils/log');

const {build, watch, lint} = require('../tasks');
const app = require('../server');

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
            watch(linting, options);
            info(`Server started. You can view your files at http://localhost:${server.port}`);
            break;
        case 'serve':
            info('Server starting');
            app.start();
            info(`Server started. You can view your files at http://localhost:${server.port}`);
            break;
        case 'lint':
            info('Linting starting');
            lint(source, options);
            break;
    }
}