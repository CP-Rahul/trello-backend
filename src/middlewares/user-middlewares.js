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

async function checkAuth(req, res, next) {
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response) {
            req.user = response;
            next();
        }
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

 module.exports = {
    validateCreateRequest,
    checkAuth
 }