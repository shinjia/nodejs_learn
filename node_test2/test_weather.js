var express = require('express');
var app = express();

// about weather
var weather = require('weather-js');
var location = 'Taipei, Taiwan';
var degreeType = 'C';

app.get('/weather', function(req, res){

	weather.find({search: location, degreeType: degreeType}, function(err, result){
	    if(err) {
	        console.log(err);
	        process.exit(0);
	    }
	    console.log(JSON.stringify(result, null, 2));
	});
	console.log(req);
});


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