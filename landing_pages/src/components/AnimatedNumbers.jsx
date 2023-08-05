import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2500});
    const isInView = useInView(ref, {once: true});
  
    useEffect(() => {
        if(isInView) {
          motionValue.set(value);
        }
    }, [isInView, value, motionValue])
  
    useEffect(() => {
          springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);   
            }
          })
    }, [springValue, value])
  
    return <span className='text-black' ref={ref}></span>
}

export default AnimatedNumbers;