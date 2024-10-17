var express = require('express');
var app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));
app.use(express.static('public/css'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Render the 'index' view when visiting the root URL
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/add',function(req,res){
    res.render('dbexample');
});

// Start the server on port 8080
app.listen(8080, function() {
    console.log('Server is running on port 8080');
});
