const Joi = require('@hapi/joi');   //  Import Joi Validator module.

module.exports.productValidator = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string(),
    imageURL: Joi.string(),
});