const {Task} = require("../models")


class TaskController {
  static async readTasks(req, res, next) {
    try {
      const { page } = req.query;
    const paramQuerySQL = {};
    const limit = 8;
    let offset;
    if (page !== '' && typeof page !== 'undefined') {
      offset = page * limit - limit;
      paramQuerySQL.offset = offset;
      paramQuerySQL.limit = limit;
    } else {

    }
    const data = await Task.findAll(paramQuerySQL);

    res.status(200).json(data);

    } catch (error) {
      next(error)
    }
  }

  static async createTasks(req, res, next) {
    try {
      const {title, description} = req.body
  
      const newTask = await Task.create({title, description})
      
      res.status(201).json(`success creating new task with id ${newTask.id}`)
    } catch (error) {
      next(error)
    }
  }

  static async updateTasks(req, res, next) {
    try {
      const {id} = req.params
      const {title, description} = req.body

      const findTask = await Task.findByPk(id)
      if (!findTask) {
        throw { name: 'NOTFOUND' }
      }
  
      const updatedTask = await Task.update({title, description}, {
        where: {id}
      })

      res.status(200).json(`success updating task with id ${id}`)

    } catch (error) {
      next(error)
    }
  }

  static async deleteTasks(req, res, next) {
    try {
      const {id} = req.params

      const findTask = await Task.findByPk(id)
      if (!findTask) {
        throw { name: 'NOTFOUND' }
      }

      const deletedTask = await Task.destroy({
        where: {id}
      })

      res.status(200).json(`success deleting task with id ${id}`)
      
    } catch (error) {
      next(error)
    }
  }

}

module.exports = TaskController