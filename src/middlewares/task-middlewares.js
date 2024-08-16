const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = new AppError('name is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.description) {
        ErrorResponse.message = new AppError('description is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.tags) {
        ErrorResponse.message = new AppError('tags is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.dueDate) {
        ErrorResponse.message = new AppError('duedate is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.assignedUserId) {
        ErrorResponse.message = new AppError('assignedUserId is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.projectId) {
        ErrorResponse.message = new AppError('projectId is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    next();
}

 module.exports = {
    validateCreateRequest,
 }