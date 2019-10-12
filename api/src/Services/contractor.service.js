const MongoLib = require("../lib/mongo.database");
const { contractorCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const ContractorService = new databaseService(contractorCollectionName, MongoLib);

ContractorService.prototype.associateEmployee = async function (contractorId, data) {
    const contractor = await this.MongoDB.get(this.collection, contractorId);

    let updatedEmployeesList = contractor.jobList
    updatedJobList.push(data)

    console.log(updatedJobList)
    const updatedId = await this.MongoDB.update(this.collection, contractorId, {
        jobList: [...updatedJobList]
    });

    return updatedId;
}


ContractorService.prototype.removeEmployee = async function (contractorId, employeeId) {
    let endDate = new Date()
    return updatedId;
}


module.exports = ContractorService