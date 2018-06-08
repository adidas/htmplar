/**
 * page
 **/

const defaultCfg = require('../../.htmplarrc.json');
const {output, sharedContent} = require('rc')('htmplar', defaultCfg);
const {walkSync} = require('../utils');

const pages = [];

const getPage = fileData => {
    if(fileData.dir !== sharedContent){
        var fileDir = fileData.dir.split(output);
        var fileName = fileData.dir.split('/');
        var pageName = fileName[fileName.length - 1].replace("-"," ");

        return {
            pageName: pageName, 
            href: fileDir[fileDir.length - 1]
        }
    }
    return null;
}

const setPage = pageData => {
    var listItem = '<li><a href='+pageData.href+'>'+pageData.pageName+'</a></li>';
    if(pages.indexOf(listItem) === -1){
        pages.push(listItem);
    }
} 

walkSync(output).forEach(file => {
    var page = getPage(file);
    if(page){
        setPage(page);
    }
});

module.exports = {pages};