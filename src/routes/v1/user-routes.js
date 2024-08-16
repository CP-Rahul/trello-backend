const express = require('express');

const { UserController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/register', 
        AuthMiddlewares.validateCreateRequest,
        UserController.register); 

router.post('/login', 
        AuthMiddlewares.validateLoginRequest,
        UserController.login); 

module.exports = router;
