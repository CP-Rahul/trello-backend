const CrudRepository = require("./crud-repository");
const user  = require('../models/user');

class UserRepository extends CrudRepository{
    constructor(){
        super(user);
    }

    async getUser(email){
        const response = await user.findOne({email: email});
        return response;
    }
}

module.exports = UserRepository;