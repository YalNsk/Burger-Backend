const { Schema, model  } = require('mongoose');

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    adress : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    role : {
        type : String,
        enum : ['User', 'Admin'],
        required : true,
        default : 'User'
    }
},
{
    collection :'user',
    timestamps : false
});

const User = model('user', userSchema);

module.exports = User;