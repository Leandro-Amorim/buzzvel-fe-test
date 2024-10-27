"use client";
import { useState } from "react";
import QuoteButton from "../shared/QuoteButton";
import TestimonyCard, { CardProps } from "./TestimonyCard";
import TestimonyButton from "./TestimonyButton";

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
    <section className="px-20 py-20 bg-purple-900 flex flex-col gap-[104px]">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-6 grow max-w-[814px]">
          <div className="flex flex-col gap-2">
            <span className="text-amber-300 font-medium text-xl leading-[22px]">
              Join other Sun harvesters
            </span>
            <h2 className="text-white font-extrabold text-[3.5rem] leading-[60px]">
              Make something awesome
            </h2>
          </div>
          <p className="text-white text-xl leading-9">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="shrink-0 pt-10 pr-10">
          <QuoteButton variant={"secondary"} />
        </div>
      </div>
      <div className="flex flex-col gap-[104px]">
        <div
          className="flex gap-6 relative"
          style={{ left: `-${selected * 364 + selected * 24}px` }}
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
        </div>
        <div className="flex gap-6">
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
        </div>
      </div>
    </section>
  );
}
