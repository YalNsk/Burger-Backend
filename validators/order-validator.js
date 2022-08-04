const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;
const statusRegex = /^(Pending)|(Preparation)|(Delivery)|(Delivered)$/i;

const createOrderValidator = yup.object({
    userId : yup.string().required().matches(idRegex),
    burgers : yup.array()
        .of(yup.object({
            burgerId : yup.string().required().matches(idRegex), 
            ingredientsSupp : yup.array().of(string())
        }))
});

const updateOrderValidator = yup.object({
    burgers : yup.array()
        .of(yup.object({
            burgerId : yup.string().required().matches(idRegex),
            ingredientsSupp : yup.array().of(string())
        })),
    statusOrder : yup.string().required().matches(statusRegex)
});

module.exports = { createOrderValidator, updateOrderValidator };