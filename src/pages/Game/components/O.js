import { motion } from "framer-motion";

const O = () => {
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


  return (
    // <div className="w-10/12 h-5/6 rounded-full bg-[#f00] flex justify-center items-center">
    //   <div className="w-10/12 aspect-square bg-rose-300 rounded-full "></div>
    // </div>
    <div>
      <motion.svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="#ff0055"
          strokeWidth="8"
          fill="#fff0"
          variants={draw}
        />
      </motion.svg>
    </div>
  );
};

export default O;
