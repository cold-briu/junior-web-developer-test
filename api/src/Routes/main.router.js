const router = require('express').Router()

router.use("/employee", require('./employee.router'));
router.use("/stakeholder", require('./stakeholder.router'));

router.get('/', (req, res, next) => {
    res.send("Esta es la api")
})



module.exports = router