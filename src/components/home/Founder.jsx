import React from 'react';
import {motion} from "framer-motion";
import mee from "../../assets/founder.webp";

const Founder = () => {
    const options ={
        initial:{
          x:"-100%",
          opacity:0,
        },
        whileInView:{
          x:0,
          opacity:1,
        }
      }
  return (
    <section className="founder">
        <motion.div {...options}>
            <img src={mee} alt="founder" height={200} width={200}/>
            <h3>Prince kumar</h3>
            <p> Hey,Everyone I am prince kumar, the founder of MBA Burger wla .
            <br/>
            our aim to create the most tasty buger on planet.
            </p>
        </motion.div>
    </section>
  );
};

export default Founder