var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir,function callback(err,list) {
	for(var i = 0; i < list.length; i ++)
	{
		if(list[i] == '*.'+ext)
		console.log(list[i]);
	}

})
