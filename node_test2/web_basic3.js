var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html', function(err) {
		if(err) res.sendStatus(404);
	});
});


app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, function(req, res) {
    res.sendFile(__dirname + "/" + req.params[0] + "." + req.params[1], function(err) {
        if (err) res.sendStatus(404);
    });
});


app.listen(8888);
console.log('Server running...');