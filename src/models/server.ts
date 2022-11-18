import cors from 'cors'
import db from '../db/config'
import express from 'express'
import routes from '../routes'

class Server {
  private app: express.Application
  private port: string
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'

    this.listen()
    this.dbConnection()
    this.middlewares()
    this.router()
  }

  async dbConnection() {
    try {
      await db.authenticate()
      console.log('Database online')
    } catch (error) {
      console.log(error)
    }
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static('public'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server connected on port ${this.port}`)
    })
  }

  router() {
    this.app.use('/api', routes)
  }
}

export default Server
