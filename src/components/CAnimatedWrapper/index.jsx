import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { animationVariants } from '../../db/General';
import { motion } from 'framer-motion';

export const CAnimatedWrapper = ({ children, variant = 'scaleOpacity', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    amount: 0.2,
  });

  const animation = animationVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={{
        ...animation.transition,
        delay,
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};
