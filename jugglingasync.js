var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var out1 = "";
var f1 = false;
var out2 = "";
var f2 = false;
var out3 = "";
var f3 = false;

http.get(url1, function (response)
{
  response.setEncoding("utf8");
  response.on("data", function(data)
  {
    //out.concat(data);
    out1 += data;
  });
  response.on("error",console.error);
  response.on("end", function ()
  {
    f1 = true;
    done();
  })
})

http.get(url2, function (response)
{
  response.setEncoding("utf8");
  response.on("data", function(data)
  {
    //out.concat(data);
    out2 += data;
  });
  response.on("error",console.error);
  response.on("end", function ()
  {
    f2 = true;
    done();
  })
})

http.get(url3, function (response)
{
  response.setEncoding("utf8");
  response.on("data", function(data)
  {
    //out.concat(data);
    out3 += data;
  });
  response.on("error",console.error);
  response.on("end", function ()
  {
    f3 = true;
    done();
  })
})

function done()
{
  if(f1 && f2 && f3)
  {
    console.log(out1);
    console.log(out2);
    console.log(out3);
  }
}
