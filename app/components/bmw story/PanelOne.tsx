import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export const PanelOne = () => {
  return (
    <div className="relative ml-150 shrink-0 flex items-center justify-center w-max h-screen px-[10vw]">
      <h2 className="font-bold text-center text-8xl md:text-[180px] font-sora whitespace-nowrap">
        <span className="relative z-0">THE {" "}</span>
        <span className="relative z-20">ULTIMATE</span>{" "}
        <span className="relative z-0">DRIVING</span>{" "}
        <span className="relative z-20">MACHINE</span>
      </h2>

      {/* Image 1 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute z-10 image-1 top-1/2 md:left-120 left-49 rotate-30 w-25 h-25   md:w-45 md:h-45 rounded-3xl"
      >
        <Image
          alt="image-1"
          fill
          sizes="100vh"
          className="object-cover bg-cover rounded-xl"
          src={
            "https://i.pinimg.com/1200x/63/a5/d9/63a5d9d6687f86ae5f6fb0e87df4d61c.jpg"
          }
        />
      </motion.div>

      {/* Image 2 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute z-10 image-2 md:top-55 top-90 md:left-347 left-175 -rotate-33 w-25 h-25 md:w-45 md:h-45 rounded-3xl"
      >
        <Image
          alt="image-2"
          fill
          sizes="100vh"
          className="object-cover bg-cover rounded-xl"
          src={"/images/3-v2.jpg"}
        />
      </motion.div>

      {/* Image 3 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute z-10 image-3 md:w-45 md:h-45 w-25 h-25 md:top-100 top-110 right-120 md:right-250 rotate-40 rounded-3xl"
      >
        <Image
          alt="image-3"
          fill
          sizes="100vh"
          className="object-cover bg-cover rounded-xl"
          src={
            "https://i.pinimg.com/736x/0e/51/27/0e51275fb9d14570c1ac0d5537cb3fef.jpg"
          }
        />
      </motion.div>
    </div>
  );
};
