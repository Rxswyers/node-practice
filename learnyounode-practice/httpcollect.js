var http = require('http');
var url = process.argv[2];
var out = ""
http.get(url, function (response)
{
  response.setEncoding("utf8");
  response.on("data", function(data)
  {
    //out.concat(data);
    out += data;
  });
  response.on("error",console.error);
  response.on("end", function ()
  {
    console.log(out.length);
    console.log(out);
  })
})
