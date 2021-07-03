const authPage = (Permissions) =>{
    return(req,res,next)=>{
        const userRole = req.body.role;
        if(Permissions.includes(userRole)){
            next()
        }
        else{
            return res.status(401).json("user authentication fail");
        }
    }
}

module.exports = { authPage}