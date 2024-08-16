const express = require('express');

const userRoutes = require('./user-routes');
const projectRoute = require('./project-routes');
const taskRoutes = require('./task-routes')

const router = express.Router();

router.use('/user', userRoutes);
router.use('/project', projectRoute);
router.use('/task', taskRoutes);

module.exports = router;
