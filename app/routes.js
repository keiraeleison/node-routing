var express = require('express');
var router  = express.Router();
var path = require('path');

// export the router
module.exports = router;

// apply routes
router.get('/', function(req, res) {
  //res.send('Welcome to the home page!');
  res.sendFile((__dirname, '../index.html'));
});

router.get('/about', function(req, res) {
  res.json({message: 'This will be the about page' });
}); 

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../contact.html'));
});

router.post('/contact', function(req, res) {
  console.log(req.body);
  res.send('Hello, ' + req.body.name);
});

router.get('/:username/:post_slug', function(req, res) {
    // Note: 
    // console.log(req.params) is displayed as expected, but
    // console.log("object: " + obj) would be displayed as: "object: [Object obj]"
    // so instead use console.log("object: %O", obj) OR JSON.stringify(obj)
  console.log('These are the parameters: ' + JSON.stringify(req.params));

  // grab user profile
  // grab the post
  res.send('You are reading ' + req.params.post_slug + 'from ' + req.params.username);
});

//404
router.use(function(req, res) {
  res.status(404);
  //res.send('404 not found');
  res.sendFile(path.join(__dirname, '../404.html'));
});