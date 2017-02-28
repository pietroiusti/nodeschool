var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
   if (err) {
        console.log('shit!');
        console.log(err);
   }
    else {
        // fs.readFile(file, 'utf8', callback) can also be used
        // instead of using toString()
        var lines = data.toString().split('\n').length - 1;
        console.log(lines);
    }
});
