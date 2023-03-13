const express = require("express");
const logger  = require("../services/loggerService")
const router  = express.Router();
const findById = require("../services/userServices")
router.get("/users", (req,res) => {
    res.send("Users");
})
router.post("/users",(req,res) => {
    console.log(req.body);
    res.send("created user");
})
router.get("/users/:id",(req,res) => {
    logger.info(req.params);
    res.send(findById(req.params.id))
})

module.exports = router