
var QuillDeltaToHtmlConverter = require("./dist/commonjs/main").QuillDeltaToHtmlConverter;

var ops = [
    {insert: 'hello', attributes: {color: '#f00'}}
]; 

var converter = new QuillDeltaToHtmlConverter(ops);
var html = converter.convert();

console.log(html);