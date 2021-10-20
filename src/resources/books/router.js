const express = require("express")
const { createOne } = require("./controller")


router.post ("/", createOne)

module.exports = Router