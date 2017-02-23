const express = require('express');
const router = express.Router()
const Users = require('../controllers/users');
const DataUsers = require('../helpers/user');


router.post('/register',Users.register)

router.post('/login',Users.login)

router.post('/decode',DataUsers.decode)

router.get('/getAll',Users.getAll)

module.exports = router
