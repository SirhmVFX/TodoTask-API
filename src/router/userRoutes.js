const router = require('express').Router()

const controller = require('../controller/userController')

router
.get('/', controller.getAllTodoTask)
.get('/:id', controller.getTodoTask)
.post('/', controller.createToDo)
.put('/:id', controller.updateToDo)
.delete('/:id', controller.deleteTodoTask)


module.exports = router;