const mongoose = require('mongoose');

/* user schema  */
const UserSchema = new mongoose.Schema({
    
    firstname: { 
        type: String, required: true
    },
    lastname: { 
        type: String, required: true
    },
    email: { 
        type: String, required: true, unique: true 
    },
    password: { 
        type: String, required: true 
    },
    picture:{
        type:String
    },
    role: { 
        type: [String], 
        enum:["USER", "ADMIN"], 
        default: "USER" 
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
},
{
        timestamps: true 
    }
);




const User = mongoose.model('UserModel', UserSchema);
module.exports = User;
