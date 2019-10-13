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
            .default(Date.now()),


        deadLine: Joi.number()
            .integer()
            .required(),

        endDate: Joi.number()
            .integer(),
        active: Joi.boolean()
            .default(true),

    }).validate(data);
}