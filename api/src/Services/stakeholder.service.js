const MongoLib = require("../lib/mongo.database");
const { stakeholderCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const StakeholderService =  new databaseService(stakeholderCollectionName, MongoLib);

StakeholderService.prototype.associateEmployee = async function (stakeholderId,data) {
    const stakeHolder = await this.MongoDB.get(this.collection, stakeholderId);
    let updatedEmployeesList = stakeHolder.employeesList
    updatedEmployeesList.push(data)
    console.log(updatedEmployeesList)
    const updatedId = await this.MongoDB.update(this.collection, stakeholderId, {
        employeesList: updatedEmployeesList
    });
    return updatedId;
}

module.exports = StakeholderService