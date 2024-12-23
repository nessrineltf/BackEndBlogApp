const mongoose = require('mongoose');

/* profile schema  */
const ProfileSchema = new mongoose.Schema({
    users:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    biography:{
        type: String,
    },
    phone:{
        type: String,
    },
    photo:{
        type: String,
    },
    country:{
        type: String,
    },
    CVlink: {
        type:String,
    },
    gitHub:{
        type:String,
    },
    followers:[
        {
            userId: String,
            followerId:String

        }
    ],
    following:[
        {
            userId: String,
            followerId:String

        }
    ]

});
module.exports = mongoose.model('Profiles', ProfileSchema);
