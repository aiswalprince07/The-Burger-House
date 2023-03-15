import express from "express";
import passport from "passport";
import { logout, myProfile } from "../controllers/user.js";

const router = express.Router();

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"],
}));
router.get(
    "/login",
    passport.authenticate("google"),
    (req,res,next)=>{
        res.send("Logged In");
    }
    // passport.authenticate("google", {
    // scope:["profile"],
    //   successRedirect: process.env.FRONTEND_URL,
    // })
  );
router.get("/me",myProfile);
router.get("/logout",logout);

export default router; 