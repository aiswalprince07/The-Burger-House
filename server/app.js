import express, { urlencoded } from "express";
import dotenv from "dotenv";
import userRoute from "./routes/User.js";
import orderRoute from "./routes/Order.js";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";

const app = express();
export default app;

dotenv.config({
  path: "./config/config.env",
});

// console.log(process.env.NODE_ENV);

//Using middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    // cookie: {
    //   secure: process.env.NODE_ENV === "development" ? false : true,
    //   httpOnly: process.env.NODE_ENV === "development" ? false : true,
    //   sameSite: process.env.NODE_ENV === "development" ? false : "none",
    // },

    // When you deploy you project

    // cookie:{
    //   secure:true,
    //   httpOnly:true,
    //   sameSite:"none",
    // },

    // When you are in development mode
    cookie: {
      secure: false,
      httpOnly: false,
      sameSite: false,
    },
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy"); // for deployment

connectPassport();

//Importing Routes

app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

//Using middleware

app.use(errorMiddleware);
