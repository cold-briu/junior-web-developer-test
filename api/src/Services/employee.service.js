const MongoLib = require("../lib/mongo.database");
const { employeeCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const EmployeeService =  new databaseService(employeeCollectionName, MongoLib);

module.exports = EmployeeService