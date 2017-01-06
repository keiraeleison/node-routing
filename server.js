var app        = require('express')();
var port       = process.env.PORT || 8080;
var morgan     = require('morgan');
var bodyParser = require('body-parser');


//configure - ORDER MATTERS HERE!
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authenticate);


// set routes 
app.get('/', function(req, res) {
  //res.send('Welcome to the home page!');
  res.sendFile(__dirname + '/index.html');
});

// If used only from here, the index page would not authenticate the user!
// app.use(authenticate);

app.get('/about', function(req, res) {
  res.json({message: 'This will be the about page' });
}); 

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.post('/contact', function(req, res) {
  console.log(req.body);
  res.send('Hello, ' + req.body.name);
});

app.get('/:username/:post_slug', checkName, function(req, res) {
    // Note: 
    // console.log(req.params) is displayed as expected, but
    // console.log("object: " + obj) would be displayed as: "object: [Object obj]"
    // so instead use console.log("object: %O", obj) OR JSON.stringify(obj)
  console.log('These are the parameters: ' + JSON.stringify(req.params));

  // grab user profile
  // grab the post
  res.send('You are reading ' + req.params.post_slug + 'from ' + req.params.username);
});

function authenticate(req, res, next) {
  // check that the user is authenticated
  // req.params.token
  console.log('Authenticating');
  next();
}

function checkName(req, res, next) {
  // validation
  // check user in database
  // mongoose: var user = User.findOne({username: req.params.username });
  // if ( !user )
  
  console.log(req.params, 'This is a middleware that checks the user');
  next();
}


// start server
app.listen(port, function() {
  console.log('App listening on port ' + port);
});