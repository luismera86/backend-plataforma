import { Sequelize } from 'sequelize'

const db = new Sequelize('prof', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

export default db