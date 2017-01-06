var express = require('express');
var router  = express.Router();
var path = require('path');
var  siteController = require('./controllers/site.controller');
var dashboardController = require('./controllers/dashboard.controller');

// export the router
module.exports = router;

// routes defined here

// site routes ==================================
router.get('/',         siteController.showHome);
router.get('/about',    siteController.showAbout);
router.get('/contact',  siteController.showContact); 
router.post('/contact', siteController.processContact);
router.get('/:username/:post_slug', siteController.showProfile); 

// dashboard routes =============================
router.get('/dashboard', dashboardController.showDashboard);

// api routes ===================================

//404
router.use(siteController.show404);