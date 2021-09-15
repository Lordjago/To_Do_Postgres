require('express-router-group');

const express = require('express');

const router = express.Router();

const userController = require('../controller/auth')

router.group('/auth', router => {
    //Sign up todos
    router.get('/sign-up', userController.getSignUp);

    //Login => GET
    router.get('/login', userController.getLogin);

    //Sign up todos => POST
    router.post('/sign-up', userController.postSignUp);

    //Login => POST
    router.post('/login', userController.postLogin);
});


module.exports = router;