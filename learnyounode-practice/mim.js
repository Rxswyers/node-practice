var dirMod = require('./dirModule');
var path = process.argv[2];
var ext = process.argv[3];
dirMod(path,ext,function (err, data)
{
  if(err)
    return console.log("Error occured");
  for(var i = 0; i < data.length; i ++)
  {
    console.log(data[i]);
  }
})
