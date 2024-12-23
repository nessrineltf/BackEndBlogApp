const isEmpty = require("./isEmpty");
const validator = require("validator");

/* register validator */
module.exports = function ValidateRegister(data) {
    let errors= {}
    data.firstname = !isEmpty(data.firstname)? data.firstname:"";
    data.lastname = !isEmpty(data.lastname)? data.lastname:"";
    data.email = !isEmpty(data.email)? data.email:"";
    data.password = !isEmpty(data.password)? data.password:"";
    data.confirmpassword = !isEmpty(data.confirmpassword)? data.confirmpassword:"";



    if (validator.isEmpty(data.firstname)){
        errors.firstname = "required firstName"
    }
    if (validator.isEmpty(data.lastname)){
        errors.lastname = "required lastName"
    }
    if (validator.isEmpty(data.email)){
        errors.email = "required email"
    }
    if (!validator.isEmail(data.email)){
        errors.email = "required format email"
    }
    if (validator.isEmpty(data.password)){
        errors.password = "required password"
    }
    if (!validator.equals(data.password,data.confirmpassword)){
        errors.password = "passwords not mutches"
    }
    if (validator.isEmpty(data.confirmpassword)){
        errors.confirmpassword = "required confirmpassword"
    }

    return{
        errors,
        isValid: isEmpty(errors),
    };
};