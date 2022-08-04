const yup = require('yup');

const userValidator = yup.object({
    email : yup.string().trim().email().required().max(255),
    firstname : yup.string().trim().required().max(150),
    lastname : yup.string().trim().required().max(150),
    password : yup.string().min(8).max(50).required(),  
    adress : yup.string()
});

module.exports = userValidator;