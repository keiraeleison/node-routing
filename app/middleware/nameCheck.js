module.exports = function(req, res, next) {
  var user = true;
  console.log('middleware');

  // user check
  //  grab user from database
  //  var user = User.findOne( {username: req.params.username });

  //  if (! user) - 404
  if ( ! user) {
    res.status(404);
    return res.send('404 not found');
  }

  // attaching information to the request
  req.user = {
    username: 'Maira'
  }

  next();
  
};