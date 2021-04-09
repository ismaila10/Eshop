const Joi = require('joi-oid')
Joi.objectId = require('joi-objectid')(Joi)


exports.validate = function (data) {
    const productSchemaValidation = Joi.object({
        
        title: Joi.string().required(),
        price: Joi.number().required(),
        status: Joi.string().required(),
        categorie: Joi.string().required(),
        description: Joi.string().required()
        
        
    });
    return productSchemaValidation.validate(data);
      
}
