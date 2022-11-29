import { Sequelize } from 'sequelize'

const db = new Sequelize('platform', 'root', 'luismera2406', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

export default db