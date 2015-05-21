var fs = require('fs');
var file = process.argv[2];
var numLines = undefined;
fs.readFile(file,function callback(err,data) {
	var buffStr = data.toString();
	var strArr = buffStr.split('\n');
	numLines = strArr.length - 1;
	console.log(numLines);
})
