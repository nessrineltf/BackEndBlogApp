const UserModel = require("../models/User.js");
const bcrypt = require('bcryptjs');
const ValidateRegister = require("../validator/register.validator.js");
const ValidateLogin = require("../validator/login.validator.js")
const jwt = require("jsonwebtoken");

/* register controller */

const Register = async (req,res) => {    
    const {errors, isValid} = ValidateRegister(req.body);
    req.body.password= bcrypt.hashSync(req.body.password,10)

    try {
        if (!isValid) {
            res.status(500).json(errors);

        } else {
            const exist = await UserModel.findOne({email: req.body.email})
            if(exist){
                return res.status(404).json({email: "email already exist" });
            }
            await UserModel.create(req.body)
            .then(() => {
                res.status(200).json({message:"success"})
            });
        }
        
        }catch (error) {
            res.status(500).json(error);
        }
        };

/* register controller */


/* LogIn controller */
const loginUser = async (req,res) => {
const {errors, isValid} = ValidateLogin(req.body);
try {
    if (!isValid) {
        res.status(500).json(errors);

    } else{
        const existUser= await UserModel.findOne({ email: req.body.email });
        if (!existUser) {
            res.status(404).send({email : " user not exist please create one "});
        } else {        
            const match = await bcrypt.compare(
                req.body.password, 
                existUser.password
            );
            /*match password*/
            if (!match) {
                res.status(404).json({ password : "not valid password"})
            }else{
                const payload = {
                    id: existUser._id,
                    firstname: existUser.firstname,
                    lastname: existUser.lastname,
                    email: existUser.email,
                    role: existUser.role
                }
                const token= jwt.sign(payload, process.env.SECRET_KEY, { 
                    expiresIn: "1d"
                } );
                res.status(200).json({token: token});
            }
        }; 
    }  
} catch (error) {
    res.status(500).json(error);    
}}
/* LogIn controller */


module.exports = {Register,loginUser}; 
