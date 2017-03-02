/*
  Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection.  
*/

var net = require('net');

var server = net.createServer(function(socket){
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    if (month.length === 1)
        month = '0' + month; 
    var day = date.getDate().toString();
    if (day.length === 1)
        day = '0' + day;
    var hours = date.getHours().toString();
    if (hours.length === 1)
        hours= '0' + hours;
    var minutes = date.getMinutes().toString();
    if (minutes.length === 1)
        minutes = '0' + minutes;
    var result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';

    socket.write(result);

    socket.end();
});
server.listen(process.argv[2]);
