import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 4 }}
      className="bubblecontainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Passionate about Competetive Programming and DSA.",
            1000,
            "Studied Core Computer Science Fundamentals like OOP , OS and DBMS.",
            1000,
            "Full Stack Web Developer , Techstack - MERN.",
            1000,
            "Invested heavy hours into playing video games!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
