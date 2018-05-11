/**
 * index
 **/

const render = require('./lib/render');
const Button = require('./lib/button');

module.exports = {
    contentBlock: render.contentBlock,
    template: render.template,
    Button: Button.default
};