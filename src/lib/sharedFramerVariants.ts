import { type Variant } from "framer-motion";

export const subtitleVariants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
    y: 10,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} satisfies Record<string, Variant>;

export const titleVariants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
    y: -10,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
} satisfies Record<string, Variant>;

export const descriptionVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
} satisfies Record<string, Variant>;

export const imageVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
} satisfies Record<string, Variant>;

export const circleVariants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.6 },
  },
} satisfies Record<string, Variant>;

export const gridVariants = {
  hidden: {
    y: 10,
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.5 },
  },
} satisfies Record<string, Variant>;
