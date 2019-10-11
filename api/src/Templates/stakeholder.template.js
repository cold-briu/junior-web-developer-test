const joi = require("@hapi/joi");

exports.validateStakeholderTemplate = function (data) {
    return joi.object({
        name,
        lastName,
        personalId,
        birthDate,
        adress,
        phone,
        email,
        company
    }).validate(data);
}