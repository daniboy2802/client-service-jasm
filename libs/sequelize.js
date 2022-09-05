const { Sequelize } = require('sequelize')
const { config } = require('../config/config')
const setupModels = require('../db/models')

const { 
  dbHost,
  dbUser,
  dbPassword,
  dbPort,
  dbName,
} = config

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`
console.log(URI)
console.log(URI)
let sequelize
try {
  sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: false,
  })
  setupModels(sequelize)

  sequelize.sync()
} catch (error) {
  console.log
}


module.exports = sequelize
