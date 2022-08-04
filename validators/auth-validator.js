const yup = require('yup');

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;

const registerValidator = yup.object({
    email : yup.string().trim().email().required().max(255),
    firstname : yup.string().trim().required().max(150),
    lastname : yup.string().trim().required().max(150),
    password : yup.string().required().min(8).max(64).matches(pwdRegex), 
    adress : yup.string()
});

const loginValidator = yup.object({
    credential : yup.string().trim().required().max(255),
    password : yup.string().required()
});


module.exports = {registerValidator, loginValidator};