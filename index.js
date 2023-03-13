const express = require("express")
const logger  = require("./services/loggerService")

const app = express()
const userRouter = require("./routes/userController")
const helloMiddleware = require("./middleware/helloMiddleware")
const variables = require("./config/variables")

console.log(variables.username);
app.use(helloMiddleware)
app.use(express.json());
let port = process.env.PORT || 3033;
app.listen(port,() => {
    console.log("Server started ...");
    logger.info("server running on port :: " + port);
})

app.get("/",(req,res) => {
    res.send("Hello world")
})
logger.error("Failed");
app.use(userRouter);