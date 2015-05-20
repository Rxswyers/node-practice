var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
var newPat = new RegExp("."+ext);
var pattern = /\b(.txt)/;

fs.readdir(dir,function callback(err,list) 
{
	var buffStr = undefined;
	for(var i = 0; i < list.length; i ++)
	{
		buffStr = list[i].toString();
		if(newPat.test(buffStr))
		console.log(list[i]);
	}

})
