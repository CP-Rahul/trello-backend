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
    console.log(error)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createProject
};
