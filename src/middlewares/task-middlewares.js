const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.error = new AppError('name is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.description) {
        ErrorResponse.error = new AppError('description is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.tags) {
        ErrorResponse.error = new AppError('tags is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.dueDate) {
        ErrorResponse.error = new AppError('duedate is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.assignedUserId) {
        ErrorResponse.error = new AppError('assignedUserId is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.projectId) {
        ErrorResponse.error = new AppError('projectId is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    next();
}

 module.exports = {
    validateCreateRequest,
 }