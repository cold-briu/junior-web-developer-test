const MongoLib = require("../lib/mongo.database");
const { employeeCollectionName } = require('../../Config/main.config')

module.exports =  class EmployeeService {
  constructor() {
    this.collection = employeeCollectionName;
    this.MongoDB = new MongoLib();
  }

  async create(data) {
  const id = await this.MongoDB.create(this.collection, data);
    return id;
  }

  async getAll(query) {
    const users = await this.MongoDB.getAll(this.collection, query);
    return users;
  }

  async getOne(userid) {
    const data = await this.MongoDB.get(this.collection, userid);
    return data;
  }

  async update(userid, data) {
    const id = await this.MongoDB.update(this.collection, userid, data);
    return id;
  }

  async delete(userid) {
    const id = await this.MongoDB.delete(this.collection, userid);
    return id;
  }
};