// index

const { contentBlock, template } = require('./lib/render');
const { default: Content } = require('./lib/content');
const { default: Button } = require('./lib/button');
const { default: Block } = require('./lib/block');
const { default: Table } = require('./lib/table');
const { default: Row } = require('./lib/row');
const { default: Column } = require('./lib/column');
const { default: Image } = require('./lib/image');
const { default: Menu } = require('./lib/menu');
const { default: Link } = require('./lib/link');
const { default: Text } = require('./lib/text');
const { default: Line } = require('./lib/line');
const { default: Headline } = require('./lib/headline');
const { default: Heading } = require('./lib/heading');
const { default: Caption } = require('./lib/caption');
const { default: HideMSO } = require('./lib/hidemso');
const { getBaseStyles } = require('./lib/utils');

module.exports = {
  contentBlock,
  template,
  Content,
  Button,
  Block,
  Table,
  Row,
  Column,
  Image,
  Menu,
  Link,
  Text,
  Line,
  Headline,
  Heading,
  Caption,
  HideMSO,
  getBaseStyles
};
