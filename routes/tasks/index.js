const router = require('express').Router();
const controller = require('../../controllers/tasks');

router.get('/', controller.getAlltasks)

router.get('/:id', controller.getTask)

router.post('/', controller.createTask)

router.put('/:id', controller.updateTask)

router.delete('/:id', controller.deleteTask)

router.get('/priority/:level', controller.getPriorityTask)

module.exports = router;