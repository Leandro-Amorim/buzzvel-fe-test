import Image from "next/image";
import * as motion from "framer-motion/client";
import {
  circleVariants,
  descriptionVariants,
  gridVariants,
  imageVariants,
  subtitleVariants,
  titleVariants,
} from "@/lib/sharedFramerVariants";

export default function ThirdSection() {
  return (
    <section
      className={`
		px-4 md:px-10 xl:px-20
		py-12 md:py-16 xl:py-20
		flex flex-col items-center lg:items-start lg:flex-row gap-16 relative`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={circleVariants}
        className={`absolute rotate-[-30deg] -z-10 bg-purple-900 rounded-full
	  
	  	w-[800px] h-[400px] translate-x-[-32%] bottom-[50px]
		sm:w-[1000px] sm:h-[500px] sm:translate-x-[-29%] sm:bottom-[200px]
		lg:w-[1200px] lg:h-[800px] lg:translate-x-[-57%] lg:top-[125px]`}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
        className="shrink-0 w-[260px] sm:w-[400px] lg:w-[509px] aspect-[509/900] relative order-2 lg:order-1"
      >
        <Image
          alt="Mobile"
          src="/mobile.png"
          className={"object-contain drop-shadow-xl"}
          fill
        />
      </motion.div>

      <div className="lg:mt-36 flex flex-col gap-12 order-1 lg:order-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <motion.span
              variants={subtitleVariants}
              className={`text-amber-600 font-medium text-center lg:text-left
			text-base leading-[18px]
			md:text-lg md:leading-[20px]
			xl:text-xl xl:leading-[22px]`}
            >
              Services
            </motion.span>
            <motion.h2
              variants={titleVariants}
              className={`text-slate-900 text-center lg:text-left
		  font-bold text-[2rem] leading-[36px]
		  md:text-[3rem] md:leading-[52px]
			xl:font-extrabold xl:text-[3.5rem] xl:leading-[60px]`}
            >
              Personalized services
            </motion.h2>
          </div>
          <motion.p
            variants={descriptionVariants}
            className={`text-slate-900 text-center lg:text-left
			text-base leading-6
			md:text-lg md:leading-7
			xl:text-xl xl:leading-9`}
          >
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.75,
                staggerChildren: 0.25,
              },
            },
          }}
          className="grid grid-cols-2 gap-12"
        >
          <motion.div
            variants={gridVariants}
            className="flex flex-col gap-4 pt-20"
          >
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Et Mauris
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </span>
          </motion.div>
          <motion.div
            variants={gridVariants}
            className="flex flex-col gap-4 pt-20"
          >
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Eget sit
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </span>
          </motion.div>
          <motion.div
            variants={gridVariants}
            className="flex flex-col gap-4 pt-20"
          >
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Imperdiet pellentesque
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
              viverra parturient tristique nulla.
            </span>
          </motion.div>
          <motion.div
            variants={gridVariants}
            className="flex flex-col gap-4 pt-20"
          >
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Non libero
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
              ut sed eros, consectetur viverra.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
