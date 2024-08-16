const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGOURL: process.env.MONGOURL,
    SALT: process.env.SALT,
    JWTEXPIRY: process.env.JWTEXPIRY,
    JWTSECRET: process.env.JWTSECRET
}