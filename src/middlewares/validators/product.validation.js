const Joi = require('joi');

exports.validate = function (data) {
    const productSchemaValidation = Joi.object({
        
        title: Joi.string().required(),
        price: Joi.number().required(),
        status: Joi.string().required(),
        description: Joi.string().required(),
        categorie: Joi.object().required,
    });
    return productSchemaValidation.validate(data);
      
}
