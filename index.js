/**
 * index
 **/

const render = require('./lib/render');
const Button = require('./lib/button');
const Block = require('./lib/block');
const Row = require('./lib/row');
const Column = require('./lib/column');
const Image = require('./lib/image');
const {getBaseStyles} = require('./lib/utils');

module.exports = {
    contentBlock: render.contentBlock,
    template: render.template,
    Button: Button.default,
    Block: Block.default,
    Row: Row.default,
    Column: Column.default,
    Image: Image.default,
    getBaseStyles: getBaseStyles
};