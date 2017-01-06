var express = require('express');
var router  = express.Router();
var path = require('path');

// export the router
module.exports = router;

// routes defined here

// apply routes
router.get('/',         showHome);
router.get('/about',    showAbout);
router.get('/contact',  showContact); 
router.post('/contact', processContact);
router.get('/:username/:post_slug', showProfile); 
router.use(show404);

function showHome(req,res) {
  //res.send('Welcome to the home page!');
  res.sendFile(path.join(__dirname, '../index.html'));
};

function showAbout(req, res) {
  res.json({message: 'This will be the about page' });
}; 

function showContact(req, res) {
  res.sendFile(path.join(__dirname, '../contact.html'));
};

function processContact(req, res) {
  console.log(req.body);
  res.send('Hello, ' + req.body.name);
};

function showProfile(req, res) {
    // Note: 
    // console.log(req.params) is displayed as expected, but
    // console.log("object: " + obj) would be displayed as: "object: [Object obj]"
    // so instead use console.log("object: %O", obj) OR JSON.stringify(obj)
  console.log('These are the parameters: ' + JSON.stringify(req.params));

  // grab user profile
  // grab the post
  res.send('You are reading ' + req.params.post_slug + ' from ' + req.params.username);
};

function show404(req, res) {
  res.status(404);
  //res.send('404 not found');
  res.sendFile(path.join(__dirname, '../404.html'));
};