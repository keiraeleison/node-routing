var app        = require('express')();
var port       = process.env.PORT || 8080;
var morgan     = require('morgan');
var bodyParser = require('body-parser');

//configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// set routes 
app.get('/', function(req, res) {
  //res.send('Welcome to the home page!');
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
  res.json({message: 'This will be the about page' });
}); 

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/:username/:post_slug', function(req, res) {
  console.log(req.params);

  // grab user profile
  // grab the post
  res.send('You are reading ' + req.params.post_slug + 'from ' + req.params.username);
});

app.post('/contact', function(req, res) {
  console.log(req.body);
  res.send('Hello, ' + req.body.name);
})

// start server
app.listen(port, function() {
  console.log('App listening on port ' + port);
});