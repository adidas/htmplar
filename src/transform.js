const Module = require("module");
require("@babel/register")({
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
});
const vm = require('vm');
const babel = require('@babel/core');
const pretty = require('pretty');
const path = require('path');

const _eval = function (file) {
    if (!file) return undefined;

    let stream = [
        "import React from 'react';",
        "import Component from '" + path.join(process.cwd(), file) + "';"
    ];

    if (file.includes('/block-')) {
        stream.push("import {contentBlock} from 'htmplar';");
        stream.push("contentBlock(Component);")
    }
    else {
        stream.push("import {template} from 'htmplar';");
        stream.push("template()(Component);");
    }

    let code = babel.transform(stream.join('\n'), {
        filename: file,
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }).code;

    return vm.runInThisContext(code, {
        filename: file,
    });
};

const transform = file => {
    global.__filename = file;
    global.__dirname = process.cwd();

    const module = new Module(global.__filename);
    module.filename = global.__filename;
    module.paths = Module._nodeModulePaths(global.__dirname);

    global.exports = module.exports;
    global.module = module;
    global.require = module.require.bind(module);

    let result = _eval(file, global.__filename);

    return typeof result === 'string' ? pretty(result) : null;
};

module.exports = {
    transform
};