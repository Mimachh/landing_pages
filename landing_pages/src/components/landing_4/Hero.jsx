import { motion, AnimatePresence } from 'framer-motion'

import { treejsLogo } from '../../assets'

import CustomButton from '../landing_3/CustomButton'
import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../../config_tshirt/motion'

const Home = () => {



  return (
    <AnimatePresence>
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
            src={treejsLogo}
            alt='logo'
            aria-label='logo'
            className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> LEARN.
              </h1>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className='flex flex-col gap-5'
            >
              <p className='max-w-md front-normal
              text-gray-600 text-base
              '>
                Start learning guitar 
                <strong> with best teacher's online</strong> {" "}
                and become a truly musician.
              </p>
              <CustomButton
              type="filled"
              title="Start Learning"
              customStyles="px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
    </AnimatePresence>
  )
}

export default Home