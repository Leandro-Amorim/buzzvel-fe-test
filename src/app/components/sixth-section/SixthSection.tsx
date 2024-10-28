import Image from "next/image";
import QuoteButton from "../shared/QuoteButton";

export default function SixthSection() {
  return (
    <section
      className={`
	px-4 md:px-10 xl:px-20
	py-12 md:py-16 xl:py-20
	bg-purple-700 flex flex-col gap-16 xl:gap-20 relative overflow-hidden`}
    >
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-6 xl:gap-4 z-10">
        <div className="2xl:pl-60 flex flex-col gap-2 grow max-w-5xl">
          <span
            className={`text-amber-300 font-medium text-center xl:text-left
			text-base leading-[18px]
			md:text-lg md:leading-[20px]
			xl:text-xl xl:leading-[22px]
			`}
          >
            Get the Sun to power your home
          </span>
          <h2
            className={`text-white text-center xl:text-left
		  	font-bold text-[2rem] leading-[36px]
		  	md:text-[3rem] md:leading-[52px]
			xl:font-extrabold xl:text-[3.5rem] xl:leading-[60px]`}
          >
            All the power that you need for your house is now available
          </h2>
        </div>

        <div className="xl:pr-20 xl:pt-10 shrink-0 flex flex-col items-center gap-4">
          <QuoteButton variant={"secondary"} />
          <p className="text-white text-base xl:text-lg">
            Egestas fringilla aliquam leo
          </p>
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

      <div
        className={`absolute bg-purple-500 rounded-full
	  	size-[365px] left-0 bottom-0 translate-x-[-50%] translate-y-[50%]
	  	md:size-[550px]
		xl:size-[780px] xl:left-auto xl:bottom-auto xl:right-0 xl:top-0 xl:translate-x-[12%] xl:translate-y-[-43%]`}
      />
    </section>
  );
}
