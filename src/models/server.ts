import express from 'express'

class Server {
    private app: express.Application
    private port: string
    
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
    }

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`Server connected on port ${this.port}`)
         })
    }
}

export default Server