var http = require('http');

http.get(process.argv[2], function(response){
    //call setEncoding with 'utf8' to make the data
    //events emit Strings rather than the standard node
    //Buffer objects
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);
