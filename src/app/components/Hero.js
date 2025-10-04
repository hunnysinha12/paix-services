import React from "react";
import { motion } from "framer-motion";

import styles from "../../../styles";
import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";

const Hero = () => {
  return (
    <div>
      <section
        className={`${styles.yPaddings} sm:pl-16 pl-6 overflow-hidden bg-gradient-to-b from-[#000514] to-[#001028] `}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth2} mx-auto flex flex-col`}
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.h1
              variants={textVariant(1.1)}
              className={styles.heroHeading}
            >
              Metadroid
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row items-center justify-center"
            >
              <h1 className={styles.heroHeading}> Ma</h1>
              <div className={styles.heroDText} />
              <h1 className={styles.heroHeading}> Ness</h1>
            </motion.div>
          </div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
          >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
            <img
              src="/cover.png"
              alt="cover"
              className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
