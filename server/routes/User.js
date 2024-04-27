// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, getallUsers } = require('../controllers/User');
const UserControllers = require('../controllers/User');
router.post('/', createUser);
router.get('/', getallUsers);

module.exports = router;
