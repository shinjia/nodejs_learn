var data = {status:"關", value:100};

var express = require('express');
var app = express();

app.get('/api', function(req, res){

    if(req.query.do=="on")
    {
    	data.status = "打開";
    	data.value = 100;
    }
    else if(req.query.do=="off")
    {
    	data.status = "關閉";
    	data.value = 0;
    }
    else if(req.query.do=="sw")
    {
    	var n = req.query.value;
    	if(n!=null)
     	{     	
            data.status = "切換到";
            data.value = parseInt(n);	
     	}
    }
    else if(req.query.do=="add")
    {
    	var n = req.query.value;
    	if(n!=null)
     	{     	
    	    data.status = "調整亮度";
    	    data.value += parseInt(n);	
     	}
    }

    res.send(data);
});

app.listen(8888);
console.log('Server running...');