const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.post('/create', usersController.createUser);

router.get('/sign-in', usersController.signIn);
module.exports = router;