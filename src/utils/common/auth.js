const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const { ServerConfig } = require('../../config');

function generateToken(user) {
  return jwt.sign(
    {
      data: {user},
    },
    ServerConfig.JWTSECRET,
    { expiresIn: ServerConfig.JWTEXPIRY }
  );
}

function comparePassword(password, encryptedPassword) {
   return bcrypt.compareSync(password, encryptedPassword);
}

function verifyToken(token) {
  try {
    return jwt.verify(token , ServerConfig.JWTSECRET)
  } catch (error) {
    throw error;
  }
}

module.exports = {
  generateToken,
  comparePassword,
  verifyToken
}
