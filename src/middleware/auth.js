const jwt = require("jsonwebtoken");

const authenticate  = function(req, req, next) {//tokenCheck or authenticate , we can write anything

    //check the token in request header
    //validate this token
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.send({ status: false, msg: "token must be present" });
        else {next()}
}


const authorise = function(req, res, next) {   //authorisationCheck or authorise, we can write anothing

    // comapre the logged in user's id and the id in request
    let token= req.headers["x-auth-token"];
    let decodedToken= jwt.verify(token, "functionup-thorium")
    let toBeUpdatedUserId= req.params.userId;
    let loggedInUserId= decodedToken.userId;
    if(loggedInUserId != toBeUpdatedUserId) return res.send({status:false, msg:"you are not authorized to perform this task"})
    next()
}


module.exports.authenticate= authenticate
module.exports.authorise = authorise 
