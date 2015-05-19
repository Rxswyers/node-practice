var fs = require('fs');
var file = process.argv[2];
var buff = fs.readFileSync(file);
var buffStr = buff.toString();
var strArr = buffStr.split('\n');

console.log(strArr.length - 1);
