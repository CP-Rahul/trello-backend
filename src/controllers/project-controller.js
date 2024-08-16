const { ProjectService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createProject(req, res) {
  try {
    const user = await ProjectService.createProject({
        name: req.body.name,
        description: req.body.description,
        userId: req.user
    });
    SuccessResponse.data = user;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllprojects(req, res) {
  try {
    const project = await ProjectService.getAllprojects();
    SuccessResponse.data = project;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getProjectsById(req, res) {
  try {
    const project = await ProjectService.getProjectsById({
        id: req.params.id,
    });
    SuccessResponse.data = project;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createProject,
  getAllprojects,
  getProjectsById,
};
