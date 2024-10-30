import Image from "next/image";
import * as motion from "framer-motion/client";
import {
  circleVariants,
  descriptionVariants,
  imageVariants,
  subtitleVariants,
  titleVariants,
} from "@/lib/sharedFramerVariants";

export default function SecondSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`
		px-4 md:px-10 xl:px-20
		py-12 md:py-16 xl:py-20
		flex flex-col items-center gap-16 xl:gap-20 relative`}
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-[900px]">
        <div className="flex flex-col items-center gap-2">
          <motion.span
            variants={subtitleVariants}
            className={`text-amber-600 font-medium text-center
			text-base leading-[18px]
			md:text-lg md:leading-[20px]
			xl:text-xl xl:leading-[22px]`}
          >
            No more waste
          </motion.span>
          <motion.h2
            variants={titleVariants}
            className={`text-slate-900 text-center
		  font-bold text-[2rem] leading-[36px]
		  md:text-[3rem] md:leading-[52px]
			xl:font-extrabold xl:text-[3.5rem] xl:leading-[60px]`}
          >
            Pick the Sun
          </motion.h2>
        </div>

        <motion.p
          variants={descriptionVariants}
          className={`text-slate-900 max-w-4xl text-center
			text-base leading-6
			md:text-lg md:leading-7
			xl:text-xl xl:leading-9`}
        >
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </motion.p>
      </div>

      <motion.div
        style={{ display: "contents" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          variants={imageVariants}
          className="w-full max-w-[1520px] aspect-[1520/854] relative"
        >
          <Image
            alt="Desktop"
            src="/desktop.png"
            fill
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
        <motion.div
          variants={circleVariants}
          className={`absolute -z-10 bg-amber-500 rounded-full top-0 left-0 translate-y-[190px]
		size-[250px] translate-x-[-60%] 
		md:size-[480px]
		xl:size-[710px] xl:translate-x-[-30%]`}
        />

        <motion.div
          variants={circleVariants}
          className={`absolute -z-10 bg-purple-700 rounded-full top-0 right-0
	  size-[210px] translate-x-[75%] translate-y-[280px]
	  md:size-[403px] 
	  xl:size-[597px] xl:translate-x-[10%] xl:translate-y-[390px]`}
        />
      </motion.div>
    </motion.section>
  );
}
