const MongoLib = require("../lib/mongo.database");
const { stakeholderCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const StakeholderService =  new databaseService(stakeholderCollectionName, MongoLib) ;

module.exports = StakeholderService