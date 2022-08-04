const yup = require('yup');

const burgerValidator = yup.object({
    name : yup.string().required().trim().max(50),
    ingredients : yup.array().of(yup.string().required().trim()),
    price : yup.string().required().trim()
});

module.exports = burgerValidator;