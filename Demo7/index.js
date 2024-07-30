const express = require('express')
const mysql = require('mysql')

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.status(200)
       .json({
           "message": "Hello world!"
       })
})

app.listen(port, (err) => {
    if (err) {
        console.error("Une erreur est survenue!", err.stack)
        throw err
    }

    console.log("Le serveur est en ligne!")
})





























