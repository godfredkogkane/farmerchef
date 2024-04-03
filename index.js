const express = require('express')
const app = express()
const farmerData = require('./farm-info.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Farmer and Chef Request")
})

app.get('/produces', (req, res) => {
    res.send(farmerData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})
