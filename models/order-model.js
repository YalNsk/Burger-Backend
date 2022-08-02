const { Schema, model, Types  } = require('mongoose');
const Burger = require('./burger-model');
const User = require('./user-model');

const orderSchema = new Schema({
    burgers : [
        {
            burgerId : {
                type : Types.ObjectId,
                ref : Burger
            },
            ingredientsSupp : {
                type : [String],
                required : false
            }
        }
    ],
    userId : {
        type : Types.ObjectId,
        ref :  User, 
        required : true
    },
    deliveryTime : {
        type : String,
        required : true,
        enum : ['Le plus vite possible', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30,', '21:00', '21:30', '22:00'],
        default : 'Le plus vite possible'
    },
    status : {
        type : String,
        enum : ['Pending', 'In preparation', 'On delivery', 'Delivered' ],
        default : 'Pending',
        required : true,
    }

},
{
    collection :'commandes',
    timestamps : true
});

const Order = model('Commande', orderSchema);

module.exports = Order; 