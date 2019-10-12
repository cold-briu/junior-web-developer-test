const Joi = require("@hapi/joi");

exports.validateJobTemplate = function (data) {
    return Joi.object({
        jobName: Joi.string()
            .required(),

        employeeId: Joi.string()
            .required(),

        duration: Joi.number()
            .integer()
            .required(),

        startDate: Joi.number()
            .integer()
            .required(),

        deadLine: Joi.number()
            .integer()
            .required(),

        endDate: Joi.number()
            .integer()
            .required(),

        active: Joi.boolean()
            .required(),

    });
}