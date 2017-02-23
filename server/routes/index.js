var express = require('express');
var router = express.Router();
var modelsIndex = require('../models/index')

/* GET home page. */
router.get('/getAll', function(req, res, next) {
    modelsIndex.find({}, function(err, result) {
        if (err) res.send(err)
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
        if (err) res.send(err)
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

router.post('/search', function(req, res, next) {
    if (req.body.letter == '' && req.body.frequency == '' && req.body.date == '') {
        res.send(false)
    } else if (req.body.frequency == '' && req.body.date == '') {
        modelsIndex.find({
            letter: req.body.letter
        }, (err, data) => {
            res.send(data)
        })
    } else if (req.body.letter == '' && req.body.date == '') {
        modelsIndex.find({
            frequency: req.body.frequency
        }, (err, data) => {
            res.send(data)
        })
    } else if (req.body.letter == '' && req.body.frequency == '') {
        modelsIndex.find({
            frequency: req.body.date
        }, (err, data) => {
            res.send(data)
        })


    } else if (req.body.letter == '') {
        modelsIndex.find({
            $and: [{
                date: req.body.date
            }, {
                frequency: req.body.frequency
            }]
        }, (err, data) => {
            res.send(data)
        })

    } else if (req.body.frequency == '') {
        modelsIndex.find({
            $and: [{
                date: req.body.date
            }, {
                letter: req.body.letter
            }]
        }, (err, data) => {
            res.send(data)
        })
    } else if (req.body.date == '') {
        modelsIndex.find({
            $and: [{
                letter: req.body.letter
            }, {
                frequency: req.body.frequency
            }]
        }, (err, data) => {
            res.send(data)
        })

    } else {
        modelsIndex.find({
            $and: [{
                letter: req.body.letter
            }, {
                frequency: req.body.frequency
            }, {
                date: req.body.date
            }]
        }, (err, data) => {
            res.send(data)
        })
    }
});

router.post('/seedData', function(req, res, next) {
    var addData = [{
        letter: 'D',
        frequency: 9,
        date: new Date()
    }, {
      letter: 'E',
      frequency: 9,
      date: new Date()
    }, {
      letter: 'F',
      frequency: 9,
      date: new Date()
    }]
    modelsIndex.collection.insert(addData, function(err, data) {
          if (err) res.send(err)
          else {
              res.send(data.ops)
          }
      })
});






module.exports = router;
