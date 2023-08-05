import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { styles } from "../../styles";
import { GameboyCanvas } from "./canvas";
import { Ps1Canvas } from "./canvas";

import Title from "../landing_1/Title";

const Hero2 = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl h-[50vh] md:my-[10vh]'
      >
        
        <Title 
          subtitle='Welcome to the'
          title="Vintage Store Games "
          className="pb-4 "
        />

        <Ps1Canvas />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <GameboyCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero2, "contact");