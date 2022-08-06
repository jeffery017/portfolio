const fs = require('fs');
var md = fs.readFileSync('test.md', 'utf-8').toString().split('\n');


var showdown = document.createElement('script');  
showdown.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js');
document.head.appendChild(showdown);


// var converter = new showdown.Converter();
// var html = converter.makeHtml(md);


console.log(md);