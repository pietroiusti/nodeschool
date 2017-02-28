// require fs module to perform filesystem operations 
var fs = require('fs');

// fs.readFileSync returns a buffer file
// use toString() to make it a string;
var contents = fs.readFileSync(process.argv[2]);
// Note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!

// to found how many new lines there are, we split up contents using '\n'
// as a delimiter.
var lines = contents.toString().split('\n').length - 1;

console.log(lines);
