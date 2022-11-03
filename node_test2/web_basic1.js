var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send('ok');
});


app.get('/api', function(req, res){
	res.send('this is api routing');
});

app.listen(8888);
console.log('Server running...');