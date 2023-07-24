const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const router = require('./routes/route')
dotenv.config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(PORT || 3000, () => {
    console.log(`Example app listening at http://localhost:` + PORT)
})

// module.exports = app