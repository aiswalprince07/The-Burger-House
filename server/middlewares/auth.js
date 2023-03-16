import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticated=(req,res,next)=>{
    const token=req.cookies["connect.sid"];
    if(!token){
        return next(new ErrorHandler("Not Log In",401));
    }
    next();
}