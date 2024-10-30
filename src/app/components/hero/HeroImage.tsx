import Image from "next/image";
import * as motion from "framer-motion/client";
import { type Variant } from "framer-motion";

const heroImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.8 },
  },
} satisfies Record<string, Variant>;

export default function HeroImage() {
  return (
    <motion.div variants={heroImageVariants} initial="hidden" animate="visible">
      <div className="absolute size-6 rounded-full bg-blue-100 top-[334px] right-[90px] md:top-[445px] md:right-[130px] xl:top-[105px] xl:right-[315px] z-[-9]" />
      <div
        className={`
	absolute -z-10 bg-sky-200 
	translate-x-1/2 -translate-y-1/2 rotate-[-45deg] 
	overflow-hidden border border-solid border-black
	w-[825px] md:w-[1100px] xl:w-[1650px]
	h-[380px] md:h-[513px] xl:h-[770px]
	top-4 -right-2 rounded-l-[60%_100%] `}
      >
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={680}
          height={(1018 / 1346) * 680}
          className="relative origin-center rotate-[45deg] right-[4%] top-[24%]"
          priority
          style={{
            width: "42%",
            height: "auto",
          }}
        />
      </div>
    </motion.div>
  );
}
