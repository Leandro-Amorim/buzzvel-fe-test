import Avatar from "../shared/Avatar";
import QuoteButton from "../shared/QuoteButton";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section
      className={`
	px-4 md:px-10 xl:px-20
	pt-[360px] md:pt-[420px] xl:pt-7
	pb-12 xl:pb-16`}
    >
      <div className="flex flex-col items-center xl:items-start gap-7 xl:gap-5 xl:max-w-[600px]">
        <h1
          className={`text-slate-900
			font-bold text-[40px] leading-[44px]
			md:text-6xl md:leading-none
			xl:font-extrabold xl:text-7xl xl:leading-[80px]
			text-center xl:text-left`}
        >
          Get the Sun to Power Your Home
        </h1>
        <p
          className={`text-slate-900
			text-lg
			md:text-xl
			xl:text-2xl xl:leading-10
			text-center xl:text-left`}
        >
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <QuoteButton />
      </div>
      <div className="flex flex-col gap-4 max-w-[600px] mt-16 xl:mt-32">
        <p className="text-slate-900 xl:text-lg">
          &ldquo;Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
          viverra orci dui consequat turpis scelerisque faucibus.&rdquo;
        </p>
        <Avatar
          image="/people/1.png"
          name="Rwanda Melflor"
          description="zerowaste.com"
        />
      </div>
      <HeroImage />
    </section>
  );
}
