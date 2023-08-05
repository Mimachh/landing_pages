import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant, technoVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { techno } from "../../constants";
import Title from "./Title";

const Techno = () => {
  return (
    <motion.section className="pb-[10vh]"
    
    >
      <div className="">

        <div className="flex flex-wrap justify-center gap-[30px] md:gap-[50px]">
        {techno.map((technology, index) => (
          
          <motion.div 
          variants={technoVariant(0.5 * index)}
          className="box shadow-card
          cursor-pointer
          border-4 rounded-md
          transition-all duration-300 ease-in text-center
          p-[25px]
          " 
          key={technology.name}>
          <div className="image">
            <img src={technology.icon} alt={technology.name}
            className="max-w-[75px] object-contain mx-auto
                    
            "
            />
          </div>
          <h3 className="font-semidbold mt-[15px]
          transition-all duration-300 ease-in-out
          ">{technology.name}</h3>
        </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Techno, "");