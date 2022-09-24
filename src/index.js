const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT
})

connection.connect(error => {
    if (error) {
        console.error(`Database connection failed: ${error.stack}`)
        return
    }

    console.log(`Connected to database`)
})

connection.end()
