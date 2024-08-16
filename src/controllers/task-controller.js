const { TaskService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createTask(req, res) {
  try {
    const user = await TaskService.createTask({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        tags: req.body.tags,
        dueDate: req.body.dueDate,
        assignedUserId: req.body.assignedUserId,
        projectId: req.body.projectId,
    });
    SuccessResponse.data = user;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getTasksGroupedByStatus(req, res) {
  try {
    const user = await TaskService. getTasksGroupedByStatus();
    SuccessResponse.data = user;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createTask,
  getTasksGroupedByStatus
};
