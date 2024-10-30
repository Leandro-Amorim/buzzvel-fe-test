"use client";
import { useState } from "react";
import QuoteButton from "../shared/QuoteButton";
import TestimonyCard, { CardProps } from "./TestimonyCard";
import TestimonyButton from "./TestimonyButton";
import * as motion from "framer-motion/client";
import { type Variant } from "framer-motion";
import {
  descriptionVariants,
  subtitleVariants,
  titleVariants,
} from "@/lib/sharedFramerVariants";

const quoteButtonVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
} satisfies Record<string, Variant>;

const arrowButtonVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
} satisfies Record<string, Variant>;

const cards = [
  {
    testimony: `Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.`,
    name: "Jane Cooper",
    description: "10KWh",
    image: "/people/2.png",
  },
  {
    testimony: `Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.`,
    name: "Ralph Edwards",
    description: "32KWh",
    image: "/people/3.png",
  },
  {
    testimony: `Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.`,
    name: "Courtney Henry",
    description: "6KWh",
    image: "/people/1.png",
  },
  {
    testimony: `Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.`,
    name: "Cameron Williamson",
    description: "12KWh",
    image: "/people/4.png",
  },
  {
    testimony: `Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.`,
    name: "Cameron Williamson",
    description: "12KWh",
    image: "/people/4.png",
  },
] satisfies Omit<CardProps, "index" | "selected" | "setSelected">[];

export default function FifthSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      className={`
	px-4 md:px-10 xl:px-20
	py-12 md:py-16 xl:py-20
	bg-purple-900 flex flex-col gap-[88px] lg:gap-[104px]`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-4"
      >
        <div className="flex flex-col gap-6 grow max-w-[814px]">
          <div className="flex flex-col gap-2">
            <motion.span
              variants={subtitleVariants}
              className={`text-amber-300 font-medium text-center lg:text-left
			text-base leading-[18px]
			md:text-lg md:leading-[20px]
			xl:text-xl xl:leading-[22px]
				`}
            >
              Join other Sun harvesters
            </motion.span>
            <motion.h2
              variants={titleVariants}
              className={`text-white text-center lg:text-left
		  	font-bold text-[2rem] leading-[36px]
		  	md:text-[3rem] md:leading-[52px]
			xl:font-extrabold xl:text-[3.5rem] xl:leading-[60px]`}
            >
              Make something awesome
            </motion.h2>
          </div>
          <motion.p
            variants={descriptionVariants}
            className={`text-white text-center lg:text-left
			text-base leading-snug
			md:text-lg md:leading-8
			xl:text-xl xl:leading-9`}
          >
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </motion.p>
        </div>
        <motion.div
          variants={quoteButtonVariants}
          className="shrink-0 lg:pt-10 lg:pr-10"
        >
          <QuoteButton variant={"secondary"} />
        </motion.div>
      </motion.div>
      <div className="flex flex-col gap-16 md:gap-[104px]">
        <motion.div
          initial={["hidden", "moving"]}
          whileInView={["visible", "moving"]}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.25,
              },
            },
          }}
          className="flex gap-6 relative"
        >
          {cards.map((card, index) => (
            <TestimonyCard
              key={index}
              index={index}
              selected={selected}
              setSelected={setSelected}
              {...card}
            />
          ))}
        </motion.div>
        <motion.div
          variants={arrowButtonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 w-full justify-center md:justify-start"
        >
          <TestimonyButton
            direction="left"
            disabled={selected === 0}
            onClick={() => {
              setSelected(selected - 1);
            }}
          />
          <TestimonyButton
            direction="right"
            disabled={selected === cards.length - 1}
            onClick={() => {
              setSelected(selected + 1);
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
