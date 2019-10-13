const MongoLib = require("../lib/mongo.database");
const { employeeCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const EmployeeService = new databaseService(employeeCollectionName, MongoLib);

EmployeeService.prototype.setAviliableTo = async function (id, booleanValue) {
    let updatedId = await this.MongoDB().update(employeeId, { aviliable: false })
    return updatedId
}

module.exports = EmployeeService