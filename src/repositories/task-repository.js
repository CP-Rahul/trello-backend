const CrudRepository = require("./crud-repository");
const task  = require('../models/task');

class UserRepository extends CrudRepository{
    constructor(){
        super(task);
    }
}

module.exports = UserRepository;