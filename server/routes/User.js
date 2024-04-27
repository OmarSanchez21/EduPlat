// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getUserById } = require('../controllers/User');

router.post('/', createUser);


module.exports = router;
