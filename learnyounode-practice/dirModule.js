var fs = require('fs');
var path = require('path');
var result = [];
module.exports = function (dir,ext,callback)
{
	if(dir)
	{
		fs.readdir(dir,function (err, data)
		{
			if(err)
				return callback(err);

			for(var i = 0; i < data.length; i++)
			{
				var fPath = data[i];

				if(path.extname(fPath) == '.'+ext)
					result.push(fPath);

			}
			callback(null,result);
		})
	}
}
