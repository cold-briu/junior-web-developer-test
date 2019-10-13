const router = require('express').Router()

const checkDataTypes = require('../Middlewares/checkDataTypes.middlware')
const jobTemplate = require('../Templates/job.template')

const JobService = require('../Services/job.service')
const job = new JobService()

router.route('/')
    .get(
        async (req, res, next) => {
            try {
                let reportJsonTable = await job.makeReport()
                res.status(200).send(reportJsonTable).end()
            } catch (error) {
                console.error("!!! err on get all jobs", error)
                res.status(500).send("error ocurred on get all jobs").end()
                next()
            }
        }
    );

router.route('/:managerId')
    .post(
        checkDataTypes(jobTemplate),
        async (req, res, next) => {
            try {
                let updatedManagerId = await job.associateEmployee(req.params.managerId, req.validatedData)
                res.status(200).send(updatedManagerId).end()

            } catch (error) {
                console.error("!!! err on asociate", error)
                res.status(500).send("error ocurred on associate").end()
                next()
            }

        })
    .put(
        async (req, res, next) => {
            try {
                let updatedManagerId = await job.removeEmployee(req.params.managerId, req.body.employeeId)
                res.status(200).send(updatedManagerId).end()
            } catch (error) {
                console.error("!!! err on delete asociate", error)
                res.status(500).send("error ocurred on delete associate").end()
                next()
            }
        });


module.exports = router