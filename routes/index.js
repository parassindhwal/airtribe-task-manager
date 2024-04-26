const router = require('express').Router();
const taskRoutes = require('./tasks');

router.use('/tasks', taskRoutes);

module.exports = router;