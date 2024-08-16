const { ProjectRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");

const projectRepository = new ProjectRepository();

async function createProject(data) {
  try {
    const project = await projectRepository.create(data);
    return project;
  } catch (error) {
    throw new AppError("Something went wrong while creating project", 500);
  }
}

module.exports = {
    createProject  
};
