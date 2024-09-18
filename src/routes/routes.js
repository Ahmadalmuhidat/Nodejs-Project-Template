// src/routes/index.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const BasicMiddleware = require('../middlewares/BasicMiddleware');

// Example routes
router.get('/users', BasicMiddleware, UserController.GetUsers);

router.post('/users', BasicMiddleware, UserController.CreateUser);

module.exports = router;
