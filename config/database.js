const { 
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_DIALECT,
    DB_PORT 
} = process.env;

module.exports = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logQueryParameters: true,
};
