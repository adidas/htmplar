/**
 * index
 **/

const render = require('./lib/render');
const Content = require('./lib/content');
const Button = require('./lib/button');
const Block = require('./lib/block');
const Table = require('./lib/table');
const Row = require('./lib/row');
const Column = require('./lib/column');
const Image = require('./lib/image');
const Menu = require('./lib/menu');
const Link = require('./lib/link');
const Text = require('./lib/text');
const Line = require('./lib/line');
const Headline = require('./lib/headline');
const Heading = require('./lib/heading');
const Caption = require('./lib/caption');
const HideMSO = require('./lib/hidemso');
const {getBaseStyles} = require('./lib/utils');

module.exports = {
    contentBlock: render.contentBlock,
    template: render.template,
    Content: Content.default,
    Button: Button.default,
    Block: Block.default,
    Table: Table.default,
    Row: Row.default,
    Column: Column.default,
    Image: Image.default,
    Menu: Menu.default,
    Link: Link.default,
    Text: Text.default,
    Line: Line.default,
    Headline: Headline.default,
    Heading: Heading.default,
    Caption: Caption.default,
    HideMSO: HideMSO.default,
    getBaseStyles: getBaseStyles
};