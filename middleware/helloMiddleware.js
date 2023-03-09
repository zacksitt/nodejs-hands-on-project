const helloMiddleware = (req,res,next) => {
    console.log("Hello middleware!!!")
    next();
}

module.exports = helloMiddleware;