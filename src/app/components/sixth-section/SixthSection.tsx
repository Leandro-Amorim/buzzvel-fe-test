import Image from "next/image";
import QuoteButton from "../shared/QuoteButton";

export default function SixthSection() {
  return (
    <section className="px-20 py-20 bg-purple-700 flex flex-col gap-20 relative overflow-hidden">
      <div className="flex justify-between gap-4 z-10">
        <div className="pl-60 flex flex-col gap-2 grow max-w-5xl">
          <span className="text-amber-300 font-medium text-xl leading-[22px]">
            Get the Sun to power your home
          </span>
          <h2 className="text-white font-extrabold text-[3.5rem] leading-[60px]">
            All the power that you need for your house is now available
          </h2>
        </div>

        <div className="pr-20 pt-10 shrink-0 flex flex-col items-center gap-4">
          <QuoteButton variant={"secondary"} />
          <p className="text-white text-lg">Egestas fringilla aliquam leo</p>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[1008px] aspect-[1008/555] relative z-10">
        <Image
          alt="Desktop"
          src="/desktop2.png"
          fill
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute size-[780px] bg-purple-500 rounded-full -right-[80px] -top-[345px]" />
    </section>
  );
}
