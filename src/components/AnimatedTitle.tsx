import { motion } from 'framer-motion';
import { FC } from 'react';

interface TypeTitle {
  text: string;
}

const AnimatedTitle: FC<TypeTitle> = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // délai entre chaque lettre
        
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.h3
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-darck"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="d-inline-block">
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default AnimatedTitle;
