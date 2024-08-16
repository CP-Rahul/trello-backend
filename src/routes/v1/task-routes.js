const express = require('express');

const { TaskController } = require('../../controllers');
const { AuthMiddlewares, TaskMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/', 
        TaskMiddlewares.validateCreateRequest,
        AuthMiddlewares.checkAuth,
        TaskController.createTask
        ); 

module.exports = router;
