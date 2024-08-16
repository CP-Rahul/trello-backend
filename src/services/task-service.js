const { TaskRepository, ProjectRepository, UserRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const taskRepository = new TaskRepository();
const projectRepository = new ProjectRepository();
const userRepository = new UserRepository();

async function createTask(data) {
  try {
    const project = await projectRepository.get(data.projectId);
    if(!project) {
      throw new AppError("Project is not exist with given projectId", 400);
    }
    const user = await userRepository.get(data.assignedUserId);
    if(!user) {
      throw new AppError("For with given email is not found", 400);
    }
    const task = await taskRepository.create(data);
    return task;
  } catch (error) {
  
    if(error instanceof AppError) throw error;
    throw new AppError("Something went wrong while creating task", 500);
  }
}

module.exports = {
    createTask 
};
