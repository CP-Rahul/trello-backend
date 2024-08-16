const CrudRepository = require("./crud-repository");
const project  = require('../models/project');

class UserRepository extends CrudRepository{
    constructor(){
        super(project);
    }
}

module.exports = UserRepository;