module.exports = function databaseService(collectionName, databaseLib) {
	return class {
		constructor() {
			this.collection = collectionName;
			this.MongoDB = new databaseLib();
		}

		async create(data) {
			const id = await this.MongoDB.create(this.collection, data);
			return id;
		}

		async getAll(query) {
			const users = await this.MongoDB.getAll(this.collection, query);
			return users;
		}

		async getOne(id) {
			const data = await this.MongoDB.get(this.collection, id);
			return data;
		}

		async update(id, data) {
			const updatedId = await this.MongoDB.update(this.collection, id, data);
			return updatedId;
		}

		async delete(id) {
			const deletedId = await this.MongoDB.delete(this.collection, id);
			return deletedId;
		}
	};
};
