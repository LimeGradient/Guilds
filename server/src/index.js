const express = require('express')
const { Database } = require('./database')

const app = express()
const port = 3000

const database = new Database()

app.get('/', (req, res) => {
    res.send('hello world');

    console.log(database.returnGuildFromID(1))
})

app.listen(port, () => {
    console.log("server running at localhost:", port)
})