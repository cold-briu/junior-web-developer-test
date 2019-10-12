const router = require('express').Router()

const checkDataTypes = require('../Middlewares/checkDataTypes.middlware')
const ContractorService = require('../Services/contractor.service')

const jobTemplate = require('../Templates/job.template')
const contractorTemplate = require('../Templates/contractor.template')

const contractorService = new ContractorService()

router.route('/')
    .get(async (req, res, next) => {
        try {
            let data = await contractorService.getAll()
            res.status(200).send(data).end()
        } catch (error) {
            console.error("!!! err on get all", error)
            res.status(500).json([{ message: "error ocurred on getAll" }]).end()
            next()
        }
    })
    .post(
        checkDataTypes(contractorTemplate),
        async (req, res, next) => {
            try {
                let id = await contractorService.create(req.validatedData)
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
            let data = await contractorService.getOne(req.params.id)
            res.status(200).send(data).end()
        } catch (error) {
            console.error("!!! err on get one", error)
            res.status(500).json([{ message: "error ocurred on getOne" }]).end()
            next()
        }
    })
    .put(async (req, res, next) => {
        try {
            let id = await contractorService.update(req.params.id, req.body)

            res.status(200).send(id).end()
        } catch (error) {
            console.error("!!! err on update", error)
            res.status(500).send("error ocurred on update").end()
            next()
        }
    })
    .delete(async (req, res, next) => {
        try {
            let id = await contractorService.delete(req.params.id)
            res.status(200).send(id).end()
        } catch (error) {
            console.error("!!! err on delete", error)
            res.status(500).send("error ocurred on delete").end()
            next()
        }
    });

router.route('/associateEmployee/:contractorId')
    .put(
        checkDataTypes(jobTemplate),
        async (req, res, next) => {
            try {

                let updatedId = await contractorService.associateEmployee(req.params.contractorId, req.validatedData)
                res.status(200).send(updatedId).end()

            } catch (error) {
                console.error("!!! err on asociate", error)
                res.status(500).send("error ocurred on associate").end()
                next()
            }

        })
    .post(
        async (req, res, next) => {
            try {
                let updatedId = await contractorService.removeEmployee(req.params.contractorId, req.body.employeeId)
                res.status(200).send(updatedId).end()
            } catch (error) {
                console.error("!!! err on delete asociate", error)
                res.status(500).send("error ocurred on delete associate").end()
                next()
            }
        });

module.exports = router