import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import {User} from "../models/User.js";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async function (accessToken, refreshToken, profile, done) {
        //Database comes here
        const user = await User.findOne({
            googleId: profile.id,
        });

        if(!user){
            const newUser = await User.create({
                googleId: profile.id,
                name: profile.displayname,
                photo: profile.photos[0].value,
            });
            // console.log(user);
            return done(null,newUser);
        }else{
          // console.log(user);
            return done(null,user);
        }
      }
    )
  );

<<<<<<< HEAD
export const connectPassport=()=>{
    passport.use(
        new GoogleStrategy(
            { 
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: process.env.GOOGLE_CALLBACK_URL,
            },async function (accessToken, refreshToken, profile, done){
                //database comes here

                // (When user logged in ..then it this function runs)
                const user=await User.findOne({
                    googleId:profile.id,
                })
 
                if(!user){
                    const newUser=await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        photo: profile.photos[0].value,
                    })
                    // console.log(user);
                    return done(null,newUser);
                }else{
                    // console.log(user);
                    return done(null,user);
                } 
            }  
        ) 
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
=======

  passport.serializeUser((user,done)=>{
    done(null,user.id);
  });
>>>>>>> 1ec0a0296e45688b0ce88faa19b7a3da2bb1bc8f

  passport.deserializeUser(async (id,done)=>{
      const user = await User.findById(id);
      done(null,user);
  })
};
