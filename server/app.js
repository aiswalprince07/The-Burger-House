import  express  from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import userRoute from "./routes/user.js"
import cookieParser from "cookie-parser";

const app=express();
export default app;

dotenv.config({
    path:"./config/config.env",
})

//Using Middlewares
app.use(
    session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
})
);

app.use(cookieParser());

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
connectPassport();

// IMporting routes
app.use("/api/v1",userRoute);