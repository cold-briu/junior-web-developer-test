const joi = require("@hapi/joi");

exports.validateEmployeeTemplate = function (data) {
    return joi.object({
        name,
        lastName,
        personalId,
        birthDate,
        adress,
        phone,
        email,
        contractType
    }).validate(data);
}