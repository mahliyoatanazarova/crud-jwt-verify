const jwt= require("jsonwebtoken")


module.exports= function(req,res, next){
try {
    if(!token){
        return res.status(400).json({
            message:'Token not found'
        })
    }
if (token.split(" ")[0]!== "Bearer"){
     return res.status(400).json({
            message:'Bearer token is required!'
        })
}

 const decod=jwt.verify(token.split(" ")[1], process.env.SECRET_KEY)

 if(decod.role !== "admin"){
    return res.status(400).json({
        message:" U rn't admin"
    });
 }


 next()
} catch (error) {
    res.status(500).json({
        message:error.message
    });
}    
};