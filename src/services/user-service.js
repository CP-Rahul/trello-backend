const bcrypt = require("bcrypt");

const { UserRepository } = require("../repositories");
const AppError = require("../utils/error/app-error");
const { ServerConfig } = require('../config');
const { generateToken, comparePassword, verifyToken } = require("../utils/common/auth");

const userRepository = new UserRepository();

async function register(data) {
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
    if(error instanceof AppError) throw error;
    throw new AppError("Something went wrong while registering", 500);
  }
}

async function login(data) {
  try {
    const user = await userRepository.getUser(data.email);
    if (!user) {
      throw new AppError("User not exixts", 400);
    }
    const passwordMatch = comparePassword(data.password, user.password);
    if (!passwordMatch) {
      throw new AppError("Invalid password", 400);
    }
    const jwtToken = generateToken({
      id: user._id,
      email: user.email,
    });
    return jwtToken;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError("Something went wrong while login", 500);
  }
}

async function isAuthenticated(token) {
  try {
    if (!token) {
      throw new AppError("Missing JWT token", 400);
    }
    const response = verifyToken(token);
    const user = await userRepository.get(response.data.user.id);
    if (!user) {
      throw new AppError("User not found", 400);
    }
    return user.id;
  } catch (error) {
    if (error instanceof AppError) throw error;
    if (error.name == "JsonWebTokenError") {
      throw new AppError("Invalid JWT token", 400);
    }
    if (error.name == "TokenExpiredError") {
      throw new AppError("JWT token expired", 400);
    }
    throw new AppError("Something went wrong", 500);
  }
}


module.exports = {
  register,
  login,
  isAuthenticated
};
