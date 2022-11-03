var data = {value:0};

var express = require('express');
var app = express();

app.get('/api', function(req, res){
	
    if(req.query.do=="on")
    {
    	data.value = 100;
    }
    else if(req.query.do=="off")
    {
    	data.value = 0;
    }
    else
    {
    	data.value = -1;
    }

    res.send(data);

});

app.listen(8888);
console.log('Server running...');