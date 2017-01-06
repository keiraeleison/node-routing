var app        = require('express')();
var port       = process.env.PORT || 8080;
var morgan     = require('morgan');
var bodyParser = require('body-parser');


//configure - ORDER MATTERS HERE!
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


// set routes 
  // var siteRouter ..
  // var dashboardRouter ..
  //var router = require('./app/routes');
  //app.use(router);
 app.use(require('./app/routes'));


// start server
app.listen(port, function() {
  console.log('App listening on port ' + port);
});