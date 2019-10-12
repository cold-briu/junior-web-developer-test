const MongoLib = require("../lib/mongo.database");
const { contractorCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const EmployeeService = require('./employee.service')
const ContractorService = new databaseService(contractorCollectionName, MongoLib);

ContractorService.prototype.associateEmployee = async function (contractorId, data) {
    try {
        const { jobList } = await this.MongoDB.get(this.collection, contractorId);
        jobList.push(data)
        const updatedId = await this.MongoDB.update(this.collection, contractorId, { jobList });
        await new EmployeeService().update(data.employeeId, { aviliable: false })
        return updatedId;
    } catch (error) {
        console.error("error inside associate emp", error)
    }
}


ContractorService.prototype.removeEmployee = async function (contractorId, employeeId) {
    try {
        const { jobList } = await this.MongoDB.get(this.collection, contractorId);
        jobList.map(entry => {
            if (entry.employeeId === employeeId && entry.active === true) {
                entry.active = false
                entry.endDate = Date.now()
                new EmployeeService().update(employeeId, { aviliable: true })
            }
        })
        const updatedId = await this.MongoDB.update(this.collection, contractorId, { jobList });
        return updatedId;
    } catch (error) {
        console.error("error inside remove emp !!! ", error)
    }
}


module.exports = ContractorService