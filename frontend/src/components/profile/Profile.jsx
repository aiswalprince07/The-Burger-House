import React from 'react'
import { motion } from 'framer-motion'
import me from "../../assets/founder.webp";
import {Link} from "react-router-dom";
import {MdDashboard} from "react-icons/md";


const Profile = () => {
    const options={
        initial:{
            y:"-100%",
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
        }

    };
    const optionss={
        initial:{
            x:"-100%",
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
        }
    }
  return (
    <section className="profile">
        <main>
            <motion.img  src={me} alt="User" {...options}/>
            <motion.h5 {...optionss} transition={{delay:0.2}}>  Prince Kumar </motion.h5>
        
        <motion.div {...optionss} transition={{delay:0.4}}>
            <Link to ="/admin/dashboard"
            style={{
                borderRadius:0,
                backgroundColor:"rgb(41,41,41)",
            }}
            >
            <MdDashboard/>Dashboard</Link>
        </motion.div>
        <motion.div {...optionss} transition={{delay:0.6}}>
            <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button {...optionss} transition={{delay:0.9}}>
             Logout
        </motion.button>
        </main>
    </section>
  )
}

export default Profile