var express = require('express');
var router = express.Router();
var modelsIndex = require('../models/index')

/* GET home page. */
router.get('/getAll', function(req, res, next) {
    modelsIndex.find({},function(err, result) {
       if(err)res.send(err)
       else res.send(result)
    })
});

router.post('/add', function(req, res, next) {
  var addData = new modelsIndex({
    letter: req.body.letter,
    frequency: req.body.frequency,
    date: req.body.date
  })
  addData.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
});

module.exports = router;
