var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket)
{
  var d = new Date(year, month, day, hours, minutes);
  socket.write()
})
server.listen(port);
