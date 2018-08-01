// page

const rc = require('rc');
const defaultCfg = require('../../.htmplarrc.json');
const { walkSync } = require('../utils');

const { output, sharedContent } = rc('htmplar', defaultCfg);
const pages = [];

const getPage = (fileData) => {
  if (fileData.dir !== sharedContent) {
    const fileDir = fileData.dir.split(output);
    const href = fileDir[fileDir.length - 1];
    const fileName = fileData.dir.split('/');
    const pageName = fileName[fileName.length - 1].replace('-', ' ');

    return {
      pageName,
      href
    };
  }

  return null;
};

const setPage = (pageData) => {
  const listItem =
    `<li style="padding: 8px 16px 8px 8px; border-bottom: 1px solid #ddd;">
      <a style="width: 100%;
          display: inline-block;
          padding: 8px 16px 8px 8px;
          position: relative;
          text-decoration: none;
          color: #000;"
          href="${ pageData.href }">
        ${ pageData.pageName }
      </a>
    </li>`;

  if (pages.indexOf(listItem) === -1) {
    pages.push(listItem);
  }
};

walkSync(output).forEach((file) => {
  const page = getPage(file);

  if (page) {
    setPage(page);
  }
});

module.exports = pages;
