var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    ejs         = require('ejs'),
    path        = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/folios'));
app.use(express.static(path.join(__dirname + '/img')));
// app.use(express.static(__dirname + '/pdfs'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.render('index');
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('Server initialised on port 3000...');
});
