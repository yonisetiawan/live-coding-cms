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


router.delete('/delete', function(req, res, next) {

    var dataRemove = JSON.parse(req.body.arrId)
    dataRemove.forEach(function(data) {
        modelsIndex.find({
            _id: data
        }, function(err, result) {
            if (err) res.send(err)
            else {
                result[0].remove(function(err) {
                    if (err) res.send(err)
                })
            }
        })
    })
    res.send({
        status: true
    })
});

router.put('/update', function(req, res, next) {
    modelsIndex.findById(req.body.id, function(err, result) {
        if (err) res.send(err)
        else {
            result.letter = req.body.letter
            result.frequency = req.body.frequency
            result.date = req.body.date
            result.save()
            res.send(result)
        }
    })

});

module.exports = router;
