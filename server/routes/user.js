import express from "express";
import passport from "passport";
import {
  myProfile,
  logout,
  getAdminUsers,
  getAdminStats,
} from "../controllers/User.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
  
);


router.get(
  "/login",

  // passport.authenticate("google"),
  // (req,res,next)=>{
  //     res.send("Logged in");
  // }

  passport.authenticate("google", {
    // scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
  })
);

router.get("/me", isAuthenticated, myProfile);
router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

export default router;