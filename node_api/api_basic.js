var express = require('express');
var app = express();

app.get('/api', function(req, res){
    res.send({"value":100});
});

app.listen(8888);
console.log('Server running...');