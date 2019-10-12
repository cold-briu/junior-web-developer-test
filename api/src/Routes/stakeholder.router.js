const router = require('express').Router()
const StakeholderService = require('../Services/stakeholder.service')
const stakeholderService = new StakeholderService()

router.route('/')
    .get(async (req, res, next) => {
        try {
            let data = await stakeholderService.getAll()
            res.status(200).send(data).end()
        } catch (error) {
            console.error("!!! err on get all", error)
            res.status(500).json([{ message: "error ocurred on getAll" }]).end()
            next()
        }
    })
    .post(async (req, res, next) => {
        try {
            let id = await stakeholderService.create(req.body)
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
            let data = await stakeholderService.getOne(req.params.id)
            res.status(200).send(data).end()
        } catch (error) {
            console.error("!!! err on get one", error)
            res.status(500).json([{ message: "error ocurred on getOne" }]).end()
            next()
        }
    })
    .put(async (req, res, next) => {
        try {
            let id = await stakeholderService.update(req.params.id, req.body)

            res.status(200).send(id).end()
        } catch (error) {
            console.error("!!! err on update", error)
            res.status(500).send("error ocurred on update").end()
            next()
        }
    })
    .delete(async (req, res, next) => {
        try {
            let id = await stakeholderService.delete(req.params.id)
            res.status(200).send(id).end()
        } catch (error) {
            console.error("!!! err on delete", error)
            res.status(500).send("error ocurred on delete").end()
            next()
        }
    });


module.exports = router