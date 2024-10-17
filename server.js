var express = require('express');
var app = express();


// Serve static files from the 'public' folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('public/css'));

app.set('view engine', 'ejs');
app.set('views', './views');

// Render the 'index' view when visiting the root URL
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/add', function (req, res) {
    res.render('dbexample');
});

var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shaan01');
var Person = require('./models/person.js');


app.get('/data',async function (req, res) {
    try{
    const respose =await Person.find();
    res.json(respose);}catch(err){
        res.send('error');
    }
});

app.post('/add', async function (req, res) {
    try {
        const info = req.body;
        if (!info.name || !info.div || !info.age) {
            res.send('data incorrect');
        } else {
            const instance = new Person({
                name: info.name,
                div: info.div,
                age: info.age,
            });
            await instance.save();
            res.redirect('/data');

        }
    } catch (err) { res.send('error'); }
});


// Start the server on port 8080
app.listen(8080, function () {
    console.log('Server is running on port 8080');
});
