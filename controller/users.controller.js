const UserModel = require("../models/User.js");
const getAllUsers = async (req,res) => {

    const users = await UserModel.find();
    res.status(200).json(users);
}

module.exports = { getAllUsers }; 
