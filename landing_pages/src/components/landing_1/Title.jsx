import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const Experience = ({title, className = "", subtitle = null}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-vt md:text-[30px] text-[24px]`}>{subtitle}</p>
        <h2 className={`${styles.sectionHeadText} ${className}  font-vt text-[60px] md:text-[90px]`}>
          {title}
        </h2>
      </motion.div>
    </>
  );
};

export default Experience;