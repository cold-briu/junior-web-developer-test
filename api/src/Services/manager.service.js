const MongoLib = require("../lib/mongo.database");
const { managerCollectionName } = require('../../Config/main.config')
const databaseService = require('../utils/createDatabaseService.util')

const ManagerService = new databaseService(managerCollectionName, MongoLib);

ManagerService.prototype.getJobList = async function (id) {
    const { jobList } = await this.MongoDB.get(this.collection, id);
    return jobList

}

ManagerService.prototype.updateJobList = async function (id, jobList) {
    let updatedId = await this.MongoDB.update(this.collection, id, { jobList });
    return updatedId
}


module.exports = ManagerService