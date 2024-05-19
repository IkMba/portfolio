import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IYKE MBA</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Enginneer</motion.h1>
          <div>
            <h3>
              Transforming Concepts into Seamless &nbsp;
              <span>User Experiences.</span>
            </h3>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Projects" variants={textVariants}>
              Explore my Works
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Engineer
      </motion.div>
      <div className="imageContainer">
        <img src="/profile.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
