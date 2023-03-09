require("dotenv").config()
console.log(process.env);
module.exports = {
    username:process.env.USERNAME,
    password:process.env.PASSWORD
}