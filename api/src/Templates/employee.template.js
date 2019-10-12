const Joi = require('@hapi/joi');
const joiSchema = require('../Utils/createJoiSchema.util')

module.exports = (data) => {
    return new joiSchema({

        name: Joi.string()
            .required(),

        lastName: Joi.string()
            .required(),

        personalId: Joi.string()
            .required(),

        birthDate: Joi.number()
            .integer()
            .required(),

        adress: Joi.string()
            .required(),

        phone: Joi.string()
            .required(),

        email: Joi.string()
            .email()
            .required(),

        aviliable: Joi.boolean()
            .default(true),

    }).validate(data);
}