var express = require('express');
var logger = require("../logger")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    logger.info("This is logger [info].");
    logger.debug("This is logger [debug].");
    logger.debug("This is logger [debug].");
  res.render('index', { title: 'Express' });
});

module.exports = router;
