var args = process.argv;
var sum = 0;
var i = 0;
for(i = 2; i < args.length; i++)
{
	sum += Number(args[i]);
}
console.log(sum);