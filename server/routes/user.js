import express from "express";
import passport from "passport";
<<<<<<< HEAD
import { getAdminUsers, logout, myProfile } from "../controllers/user.js";
=======
import {
  myProfile,
  logout,
  getAdminUsers,
  getAdminStats,
} from "../controllers/User.js";
>>>>>>> 1ec0a0296e45688b0ce88faa19b7a3da2bb1bc8f
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminStats } from "../../frontend/src/redux/actions/admin.js";

const router = express.Router();

<<<<<<< HEAD
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
=======
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
>>>>>>> 1ec0a0296e45688b0ce88faa19b7a3da2bb1bc8f
