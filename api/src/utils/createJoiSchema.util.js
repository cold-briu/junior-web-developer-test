const Joi = require('@hapi/joi');

module.exports = function createJoiSchema(keys) {
    return Joi.object().strict().keys({ ...keys })
}