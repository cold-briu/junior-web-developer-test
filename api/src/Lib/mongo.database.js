const { MongoClient, ObjectId } = require("mongodb");
const { dbName, dbPassword, dbUser, dbHost } = require("../config/config");

const MONGO_URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/test?retryWrites=true&w=majority`;

module.exports = class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.dbName = dbName;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err);
                    }
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return MongoLib.connection;
    }

    create(collection, data) {
        return this.connect()
            .then(db =>
                db.collection(collection).insertOne({ ...data, timestamp: new Date().getTime() }))
            .then(result => result.insertedId);
    }

    get(collection, id) {
        return this.connect().then(db =>
            db.collection(collection).findOne({ _id: ObjectId(id) })
        );
    }

    getAll(collection, query) {
        return this.connect().then(db =>
            db.collection(collection).find(query).toArray()
        );
    }



    createMany(collection, arrayData) {
        return this.connect()
            .then(db => 
                db.collection(collection).insertMany(arrayData))
            .then(result => result.map(entry => entry.insertedId));
    }

    update(collection, id, data) {
        return this.connect()
            .then(db => 
                db.collection(collection)
                    .findOneAndUpdate(
                        { _id: ObjectId(id) },
                        {
                            $set: data,
                            updated_timestamp: new Date().getTime()
                        },
                        { upsert: true }
                    ))
            .then(result => result.upsertedId);
    }

    delete(collection, id) {
        return this.connect()
            .then(db => 
                db.collection(collection)
                    .findOneAndDelete({ _id: ObjectId(id) }) )
            .then(() => id);
    }
}