const express = require("express")
const app = express()
const userRouter = require("./routes/userController")
const helloMiddleware = require("./middleware/helloMiddleware")
const variables = require("./config/variables")

console.log(variables.username);
app.use(helloMiddleware)
app.use(express.json());
app.listen(3033)
app.get("/",(req,res) => {
    res.send("Hello world")
})
app.use(userRouter);