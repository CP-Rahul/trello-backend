const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = new AppError('name is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.email) {
        ErrorResponse.message = new AppError('email is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    if(!req.body.password) {
        ErrorResponse.message = new AppError('password is not found in the request body', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    next();
}
 module.exports = {
    validateCreateRequest
 }