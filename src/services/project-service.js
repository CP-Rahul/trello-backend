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

async function getAllprojects() {
  try {
    const project = await projectRepository.getAll();
    return project;
  } catch (error) {
    throw new AppError("Something went wrong while fetching all projects", 500);
  }
}

async function getProjectsById(data) {
  try {
    const project = await projectRepository.get(data.id);
    if(!project) {
      throw new AppError("Project with given id is not exists", 400);
    }
    project.tasks = await taskRepository.getTasksByProjectId(data.id);
    return project;
  } catch (error) {
    if(error instanceof AppError) throw error;
    throw new AppError("Something went wrong while fetching project", 500);
  }
}

module.exports = {
    createProject ,
    getAllprojects,
    getProjectsById
};
