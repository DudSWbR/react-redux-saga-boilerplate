import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Block } from "./styles";
// import isMobile from "~/hooks/isMobile";
import { scrollTop } from "~/utils/tools";

export default function Home() {
  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const animations = {
    exit: { y: "50%", opacity: 0, transition },
    enter: {
      y: "0%",
      opacity: 1,
      transition,
    },
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      {/* <HeaderLogin /> */}
      <Block>
        <motion.div
          variants={animations}
          className="single"
          initial="exit"
          animate="enter"
          exit="exit"
        ></motion.div>
      </Block>
      {/* <Footer /> */}
    </>
  );
}
