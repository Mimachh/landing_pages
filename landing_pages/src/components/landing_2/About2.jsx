import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { servicesStore, AnimatedNumbersLanding2 } from '../../constants'
import { fadeIn, textVariant } from '../../utils/motion'
import { SectionWrapper } from '../../hoc'


import AnimatedNumbers from '../AnimatedNumbers'
import ServiceCard from '../ServiceCard'


const About2 = () => {
  return (
    <>
      <motion.div
      className='mt-8 '
      variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} text-black-200 text-center font-vt md:text-[30px] text-[24px]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} !text-black text-center font-vt !text-[60px] md:!text-[110px]`}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-primary text-lg md:text-[25px] max-w-3xl mx-auto leading-[30px] font-vt "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi possimus voluptates, numquam reiciendis doloremque itaque ab corporis sint sapiente provident commodi aliquam perspiciatis adipisci, soluta voluptatem vitae delectus veniam.
      </motion.p>

      <div  
      className='
      col-span-2 flex flex-col items-center 
      gap-8 justify-between 
      xl:col-span-8 md:flex-row xl:items-center 
      md:order-3
      my-[50px] md:my-[120px]
      '>
        {AnimatedNumbersLanding2.map((number, index) => (
          <div 
          key={index}
          className='flex flex-col items-end justify-center xl:items-center text-primary
          border p-8 rounded-lg border-primary
          shadow-md
          '>
            <span className='inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={number.number} />{number.numberPlus}{number.sign}
            </span>
            <h2 
            className='
            text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{number.info}</h2>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center ">
        {servicesStore.map((service, index) => (
          <ServiceCard 
          key={service.title}
          index={index}
          {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About2, "")