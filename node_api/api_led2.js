var data = {value:0, status:"test"};

var express = require('express');
var app = express();

app.get('/on', function(req, res){
	data.value = 100;
    res.send(data);
});

app.get('/off', function(req, res){
    data.value = 0;
    res.send(data);
});

app.listen(8888);
console.log('Server running...');