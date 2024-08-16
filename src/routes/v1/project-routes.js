const express = require('express');

const { ProjectController } = require('../../controllers');
const { AuthMiddlewares, ProjectMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/', 
    ProjectMiddlewares.validateCreateRequest,
        AuthMiddlewares.checkAuth,
        ProjectController.createProject); 

module.exports = router;
