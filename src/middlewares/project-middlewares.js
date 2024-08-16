const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');
const { UserService } = require('../services');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = new AppError('name is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.description) {
        ErrorResponse.message = new AppError('descriptionis not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    next();
}

 module.exports = {
    validateCreateRequest,
 }