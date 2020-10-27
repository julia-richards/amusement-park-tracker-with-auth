const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');

router.get('/user/register', csrfProtection, (req, res) => {

});

router.post('/user/register', csrfProtection, (req, res) => {

});

module.exports = router;