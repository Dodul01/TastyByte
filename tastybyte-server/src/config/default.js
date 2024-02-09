require('dotenv').config()

const config = {
    URI: process.env.URI,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
}

module.exports = config;