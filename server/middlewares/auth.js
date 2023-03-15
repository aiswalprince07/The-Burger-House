export const isAuthenticated=(req,res,next)=>{
    const token=req.cookies["connect.sid"];
    console.log(token);
    if(!token){
        return res.status(400).json({
            
        })
    }
    next();
}