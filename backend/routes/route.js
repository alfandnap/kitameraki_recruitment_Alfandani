const express = require('express')
const TaskController = require('../controllers/taskcontroller')
const errorHandler = require('../middlewares/errorhandler')
const router = express.Router()

router.get('/tasks', TaskController.readTasks)
router.post('/tasks', TaskController.createTasks)
router.put('/tasks/:id', TaskController.updateTasks)
router.delete('/tasks/:id', TaskController.deleteTasks)

router.use(errorHandler)

module.exports = router