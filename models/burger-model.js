const { Schema, model  } = require('mongoose');

const burgerSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    ingredients : {
        type : [String],
        required : true, 
        trim : true
    },
    price : {
        type : String,
        required : true,
        trim : true
    }
},
{
    collection :'lesBurgers',
    timestamps : false
});

const Burger = model('lesBurgers', burgerSchema);

module.exports = Burger;