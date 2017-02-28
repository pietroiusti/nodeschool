var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var fileType = '.' + process.argv[3];

fs.readdir(dirPath, function(err, list){
    if (err) {
        console.log(err);
    } else {
        list.forEach(function(file){
            if (path.extname(file) === fileType)
                console.log(file);
        });
    }
});
