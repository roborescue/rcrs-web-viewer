
const fs = require('fs');
const { minify } = require("terser");
const mustache = require('mustache');
const chalk = require('chalk');
const jsdoc2md = require('jsdoc-to-markdown')
const path = require('path');
const execSync = require('child_process').execSync;

const CONFIG = require('../config.json');

const DIST_PATH = CONFIG.dist_path;
const LINE_BREAK = "\n";

const CURRENT_VERSION = CONFIG.version + "." + Date.now()
const NOW = new Date();

function createTemplateFile(previewFile, filesToLoad, template, params) {
    var view = {
        title: CONFIG.preview.title,
        version: CURRENT_VERSION,
        modules: CONFIG.preview.modules,
        files: filesToLoad,
        file_name: previewFile,
        param: params
    };

    var output = mustache.render(template, view);
    var filePath = CONFIG.preview.path + previewFile;
    fs.writeFileSync(filePath, output, {flag: "w"}); 
    fileLog(filePath, "File updated");
}

function getHeadComment(){
    let template = fs.readFileSync(CONFIG.preview.comment, 'utf8');
    let now = NOW;

    var view = {
        title: CONFIG.preview.title,
        version: CURRENT_VERSION,
        homepage: CONFIG.homepage,
        date: now.toISOString() + " (" + now.toUTCString() + ")"
    };

    var output = mustache.render(template, view);
    return output;
}

function fileLog(file, log){
    console.log(chalk.cyan(
        chalk.italic.underline(file) +
        ": " +
        chalk(log)
    ));
}

let totalLines = 0;
let allFilesList = [];
let singleFiles = [];
let minifiedSingleFiles = [];
let headComment = getHeadComment();

CONFIG.compile.forEach(compile => {
    let finalCode = headComment + LINE_BREAK;
    let lines = 0;
    let inPreview = compile.inPreview;
    compile.files.forEach(async (file) => {
        let contents = fs.readFileSync(file, 'utf8');
        
        // JSDoc
        name = path.basename(file).split(".")[0];
        let jsdocmd = jsdoc2md.renderSync({ files: file });
        let mdFilePath = CONFIG.doc.jsdoc + name + ".md";
        let mdTemplate = fs.readFileSync(CONFIG.doc.template, 'utf8');
        var mdFileContent = mustache.render(mdTemplate, {
            title: name,
            document: jsdocmd
        });

        fs.writeFileSync(mdFilePath, mdFileContent, {flag: "w"}); 
        fileLog(mdFilePath, "markdown file updated");

        // Join Files
        if(inPreview)
            allFilesList.push(file);

        finalCode = finalCode + contents + LINE_BREAK;
        fileLog(file, "readed and added to memory");
    });

    lines = finalCode.split(/\r\n|\r|\n/).length;
    totalLines += lines;

    // Main File
    let mainFile = DIST_PATH + compile.dist.main;
    fs.writeFileSync(mainFile, finalCode, {flag: "w"}); 
    if(inPreview)
        singleFiles.push(mainFile);
    fileLog(mainFile, "File updated (" + totalLines + " Lines of code)");

    // Minified File
    if(inPreview)
        minifiedSingleFiles.push(DIST_PATH + compile.dist.minified);
    (async () => {
        let minifiedFile = DIST_PATH + compile.dist.minified;
        var minifiedCode = await minify(finalCode, { sourceMap: true });
        fs.writeFileSync(
            minifiedFile, 
            minifiedCode.code + LINE_BREAK, 
            {flag: "w"}
        ); 
        fileLog(minifiedFile, "File updated");
    })();

})

let template = fs.readFileSync(CONFIG.preview.template, 'utf8');

createTemplateFile("devel.html", allFilesList, template, CONFIG.preview.param['devel']);
createTemplateFile("dist.html", singleFiles, template, CONFIG.preview.param['dist']);
createTemplateFile("dist.min.html", minifiedSingleFiles, template, CONFIG.preview.param['dist.min']);

console.log(chalk.bold.green(totalLines + " Lines of code readed. Good job!"));

// Update version of package.json
console.log(chalk.bold.green("Version: " + CURRENT_VERSION));
