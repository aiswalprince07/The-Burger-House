import express from "express";
import passport from "passport";
import { getAdminUsers, logout, myProfile } from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminStats } from "../../frontend/src/redux/actions/admin.js";

const router = express.Router();

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],   // but strategy nhi to ...Provider me strategy banyenge 
}));
router.get(
    "/login",
    passport.authenticate("google"),
     (req,res,next)=>{
      res.end("Logged IN");
     }
    // passport.authenticate("google", {
    // scope:["profile"],
    //   successRedirect: process.env.FRONTEND_URL,
    // })
  );
router.get("/me",isAuthenticated,myProfile);
router.get("/logout",logout);

//admin routes
router.get("/admin/users",isAuthenticated,authorizeAdmin,getAdminUsers);
router.get("/admin/stats",isAuthenticated,authorizeAdmin,getAdminStats);

export default router; 