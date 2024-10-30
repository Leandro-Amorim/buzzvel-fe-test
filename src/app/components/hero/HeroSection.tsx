import { type Variant } from "framer-motion";
import Avatar from "../shared/Avatar";
import QuoteButton from "../shared/QuoteButton";
import HeroImage from "./HeroImage";
import * as motion from "framer-motion/client";

const heroUpperVariants = {
  hidden: {
    y: -10,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
} satisfies Record<string, Variant>;

const heroLowerVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
} satisfies Record<string, Variant>;

export default function HeroSection() {
  return (
    <section
      className={`
	px-4 md:px-10 xl:px-20
	pt-[360px] md:pt-[420px] xl:pt-7
	pb-12 xl:pb-16`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col items-center xl:items-start gap-7 xl:gap-5 xl:max-w-[600px]"
      >
        <motion.h1
          variants={heroUpperVariants}
          className={`text-slate-900
			font-bold text-[40px] leading-[44px]
			md:text-6xl md:leading-none
			xl:font-extrabold xl:text-7xl xl:leading-[80px]
			text-center xl:text-left`}
        >
          Get the Sun to Power Your Home
        </motion.h1>
        <motion.p
          variants={heroUpperVariants}
          className={`text-slate-900
			text-lg
			md:text-xl
			xl:text-2xl xl:leading-10
			text-center xl:text-left`}
        >
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </motion.p>
        <motion.div variants={heroUpperVariants}>
          <QuoteButton />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.5,
            },
          },
        }}
        className="flex flex-col gap-4 max-w-[600px] mt-16 xl:mt-32"
      >
        <motion.p
          variants={heroLowerVariants}
          className="text-slate-900 xl:text-lg"
        >
          &ldquo;Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
          viverra orci dui consequat turpis scelerisque faucibus.&rdquo;
        </motion.p>
        <motion.div variants={heroLowerVariants}>
          <Avatar
            image="/people/1.png"
            name="Rwanda Melflor"
            description="zerowaste.com"
          />
        </motion.div>
      </motion.div>

      <HeroImage />
    </section>
  );
}
