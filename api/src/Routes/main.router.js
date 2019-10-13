const router = require('express').Router()

router.use("/employee", require('./employee.router'));
router.use("/manager", require('./manager.router'));
router.use('/job', require('./job.router'));

router.get('/', (req, res, next) => {
    res.send("Esta es la api")
})



module.exports = router