var express = require('express');
var logger = require("../logger")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    logger.error("This is logger.");
  res.render('index', { title: 'Express' });
});

module.exports = router;
