var http = require('http');
var getStr = process.argv[2];

http.get(getStr, function (response)
{
  response.setEncoding("utf8");
  response.on("data", console.log);
  response.on("error",console.error);
})
