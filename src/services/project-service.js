const { ProjectRepository, TaskRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const projectRepository = new ProjectRepository();
const taskRepository = new TaskRepository();

async function createProject(data) {
  try {
    const project = await projectRepository.create(data);
    return project;
  } catch (error) {
    throw new AppError("Something went wrong while creating project", 500);
  }
}

async function getProjectsById(data) {
  try {
    const project = await projectRepository.get(data.id);
    project.tasks = await taskRepository.getTasksByProjectId(data.id);
    return project;
  } catch (error) {
    throw new AppError("Something went wrong while creating project", 500);
  }
}

module.exports = {
    createProject  ,
    getProjectsById
};
