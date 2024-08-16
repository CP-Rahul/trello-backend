const CrudRepository = require("./crud-repository");
const task  = require('../models/task');

class UserRepository extends CrudRepository{
    constructor(){
        super(task);
    }

    async getTasksGroupedByStatus() {
        try {
          const groupedTasks = await task.aggregate([
            {
              $group: {
                _id: "$status", 
                tasks: { $push: "$$ROOT" } 
              }
            },
            {
              $project: {
                _id: 0,  
                status: "$_id",
                tasks: 1
              }
            }
          ]);
          return groupedTasks;
        } catch (error) {
          throw error;
        }
    }

    async getTasksByProjectId(id) {
      try {
        const response = await task.find({ projectId: id });
        return response;
      } catch (error) {
        console.log(error)
        throw error;
      }
    }
}

module.exports = UserRepository;