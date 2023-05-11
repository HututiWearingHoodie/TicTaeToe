import { motion } from "framer-motion";

const X = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const delay = Math.random();

  return (
    // <div className="w-full h-full relative left-2/4 ">
    //   <div className="w-1/12 h-full bg-blue-500 rotate-45 absolute -translate-x-1/2"></div>
    //   <div className="w-1/12 h-full bg-blue-500 -rotate-45 absolute -translate-x-1/2"></div>
    // </div>
    <div>
      <motion.svg
        height="100%"
        width="100%"
        viewBox="0 0 110 110"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="10"
          y1="100"
          x2="100"
          y2="10"
          stroke="#0099ff"
          strokeWidth="8"
          variants={draw}
          custom={delay}
        />
        <motion.line
          x1="10"
          y1="10"
          x2="100"
          y2="100"
          stroke="#0099ff"
          strokeWidth="8"
          variants={draw}
          custom={delay + 0.5}
        />
      </motion.svg>
    </div>
  );
};

export default X;