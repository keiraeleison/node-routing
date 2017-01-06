var path = require('path');

module.exports = {
  showHome: showHome,
  showAbout: showAbout,
  showContact: showContact,
  processContact: processContact,
  showProfile: showProfile,
  show404: show404
};

function showHome(req,res) {
  //res.send('Welcome to the home page!');
  res.sendFile(path.join(__dirname, '../../index.html'));
};

function showAbout(req, res) {
  res.json({message: 'This will be the about page' });
}; 

function showContact(req, res) {
  res.sendFile(path.join(__dirname, '../../contact.html'));
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
  console.log(req.user);

  // grab user profile
  // grab the post
  res.send('You are reading ' + req.params.post_slug + ' from ' + req.params.username);
};

function show404(req, res) {
  res.status(404);
  //res.send('404 not found');
  res.sendFile(path.join(__dirname, '../../404.html'));
};