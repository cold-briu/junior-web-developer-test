const Joi = require("@hapi/joi");

exports.validateContractorTemplate = function (data) {
    return Joi.object({

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
            .required(),

        company: Joi.string()
            .required(),

        jobList: Joi.array()

    });
}