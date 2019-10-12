const router = require('express').Router()

router.use("/employee", require('./employee.router'));
router.use("/contractor", require('./contractor.router'));

router.get('/', (req, res, next) => {
    res.send("Esta es la api")
})



module.exports = router