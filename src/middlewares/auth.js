const jwt = require("jsonwebtoken");

let tokenCheck = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
        else { next() }
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

let authorisationCheck = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        let decodedToken = jwt.verify(token, "functionup-thorium")
        let toBeUpdatedUserId = req.params.userId;
        let loggedInUserId = decodedToken.userId;
        if (loggedInUserId != toBeUpdatedUserId) return res.status(403).send({ status: false, msg: "you are not authorized to perform this task" })
        else { next() }
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
};


module.exports.tokenCheck = tokenCheck
module.exports.authorisationCheck = authorisationCheck