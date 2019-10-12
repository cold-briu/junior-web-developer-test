
module.exports = function checkDataTypes(dataValidator) {
    return (req, res, next) => {
        try {
            const { error, value } = dataValidator(req.body);
            if (error) return res.status(400).send("wrong data types :: " + error).end()
            req.validatedData = value
            next()
        } catch (err) {
            next(err);
        }
    }
}

