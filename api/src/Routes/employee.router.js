const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send("Empleados")
})


module.exports = router