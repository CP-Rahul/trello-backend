const express = require('express');

const userRoutes = require('./user-routes');
const projectRoute = require('./project-routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/project', projectRoute);

module.exports = router;
