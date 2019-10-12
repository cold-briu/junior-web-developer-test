const Joi = require("@hapi/joi");
const joiSchema = require('../Utils/createJoiSchema.util')

module.exports = (data) => {
    return new joiSchema({

        jobName: Joi.string()
            .required(),

        employeeId: Joi.string()
            .required(),

        duration: Joi.number()
            .integer()
            .required(),

        startDate: Joi.number()
            .integer()
            .default(0),

        deadLine: Joi.number()
            .integer()
            .required(),

        endDate: Joi.number()
            .integer()
            .default(Date.now()),

        active: Joi.boolean()
            .default(true),

    }).validate(data);
}