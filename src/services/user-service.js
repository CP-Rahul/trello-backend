const bcrypt = require("bcrypt");

const { UserRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");
const { ServerConfig } = require('../config');

const userRepository = new UserRepository();

async function register(data) {
  console.log(ServerConfig)
  try {
    let user = await userRepository.getUser(data.email);
    if (user) {
      throw new AppError("User already exixts", 400);
    }
    const encryptedPassword = bcrypt.hashSync(
      data.password,
      +ServerConfig.SALT
    );
    data.password = encryptedPassword;
    user = await userRepository.create(data);
    return user;
  } catch (error) {
    console.log(error)
    if(error instanceof AppError) throw error;
    throw new AppError("Something went wrong while registering", 500);
  }
}

module.exports = {
  register,
};
