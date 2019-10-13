require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    cors: process.env.CORS,

    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,

    employeeCollectionName: process.env.DB_EMPLOYEE_COLLECTION,
    managerCollectionName: process.env.DB_CONTRACTOR_COLLECTION,
    userCollectionName: process.env.DB_USERS_COLLECTION,
};
