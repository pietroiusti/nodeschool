var http = require('http');
var bl = require('bl');

var count = 0;
var results = [];

for (var i = 0; i < 3; i++) {
    httpGet(i);
}


function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err);
            }

            results[index] = data.toString();
            count++;

            if (count === 3) {
                for (var j = 0; j < 3; j++) {
                    console.log(results[j]);
                } 
            }
        }));
    });
}
