var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html', function(err) {
		if(err) res.sendStatus(404);
	});
});

app.listen(8888);
console.log('Server running...');