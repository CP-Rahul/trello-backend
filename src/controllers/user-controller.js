const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function register(req, res) {
  try {
    const user = await UserService.register({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  register,
};
