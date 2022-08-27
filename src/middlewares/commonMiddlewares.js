  
   // to verify that Token(isFreeAppUser) is avalibale or not
const middleware = function (req, res, next) {

    let tokenHeader = req.headers.isfreeappuser;
console.log(tokenHeader)

    if(!tokenHeader){
        res.send("plese enter isFreeAppUser Bollean filed with any value")
    }
    else {
        next()   //afer next() call it will redirect to Router file  form where the algoritm came ghere
    }
};


module.exports.middleware = middleware;
