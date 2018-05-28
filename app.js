var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    ejs         = require('ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server initialised on port 3000...');
});
