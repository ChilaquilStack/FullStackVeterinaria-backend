export default {
    mongo: {
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        username: process.env.MONGO_INITDB_ROOT_USERNAME,
        host: process.env.MONGO_INITDB_HOST,
        port: process.env.MONGO_INITDB_PORT,
        database: process.env.MONGO_INITDB_DATABASE
    },
    server: {
        port: process.env.PORT,
        host: process.env.HOST
    }
}