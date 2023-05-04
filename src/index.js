const ENV = process.env.NODE_ENV

if(ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res, next) => {
    res.json({hello: "World"})
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server Started At Port ${PORT} in ${ENV}`);
})