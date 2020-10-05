const express = require("express")
const app = express()
const router = require("./route/musicaRoutes")

app.use("/", router)


module.exports = app