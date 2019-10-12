const router = require('express').Router()

router.use("/employees", require('./employee.router'));
router.use("/stakeholders", require('./stakeholder.router'));

router.get('/', (req, res, next) => {
    res.send("Esta es la api")
})



module.exports = router