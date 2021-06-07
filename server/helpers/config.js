require('dotenv').config()


const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

let MONGODB_URI
const MONGOOSE_OPTIONS = {
    useNewUrlparser:true,
    useUnifiedTopology:true
}


switch (NODE_ENV) {
    case "development":
        MONGODB_URI = process.env.MONGODB_DEV_URI
        break;
    case "production":
        MONGODB_URI = process.env.MONGODB_PROD_URI
        break;
    default: 
        throw ("No environment was specified")
}

const JWT_SECRET = process.env.JWT_SECRET



module.exports = {
    PORT,
    NODE_ENV,
    MONGODB_URI,
    MONGOOSE_OPTIONS,
    JWT_SECRET
}