const router = require('express').Router()

const checkDataTypes = require('../Middlewares/checkDataTypes.middlware')
const managerTemplate = require('../Templates/manager.template')

const ManagerService = require('../Services/manager.service')
const manager = new ManagerService()

router.route('/')
    .get(async (req, res, next) => {
        try {
            let data = await manager.getAll()
            res.status(200).send(data).end()
        } catch (error) {
            console.error("!!! err on get all", error)
            res.status(500).json([{ message: "error ocurred on getAll" }]).end()
            next()
        }
    })
    .post(
        checkDataTypes(managerTemplate),
        async (req, res, next) => {
            try {
                let id = await manager.create(req.validatedData)
                res.status(200).send(id).end()
            } catch (error) {
                console.error("!!! err on create", error)
                res.status(500).send("error ocurred on create").end()
                next()
            }
        });


router.route('/:id')
    .get(async (req, res, next) => {
        try {
            let data = await manager.getOne(req.params.id)
            res.status(200).send(data).end()
        } catch (error) {
            console.error("!!! err on get one", error)
            res.status(500).json([{ message: "error ocurred on getOne" }]).end()
            next()
        }
    })
    .put(async (req, res, next) => {
        try {
            let id = await manager.update(req.params.id, req.body)

            res.status(200).send(id).end()
        } catch (error) {
            console.error("!!! err on update", error)
            res.status(500).send("error ocurred on update").end()
            next()
        }
    })
    .delete(async (req, res, next) => {
        try {
            let id = await manager.delete(req.params.id)
            res.status(200).send(id).end()
        } catch (error) {
            console.error("!!! err on delete", error)
            res.status(500).send("error ocurred on delete").end()
            next()
        }
    });

module.exports = router