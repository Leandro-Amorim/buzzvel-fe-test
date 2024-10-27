import Avatar from "../shared/Avatar";
import QuoteButton from "../shared/QuoteButton";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section className="px-20 pt-7 pb-16">
      <div className="flex flex-col gap-5 max-w-[600px]">
        <h1 className="text-slate-900 font-extrabold text-7xl leading-[80px]">
          Get the Sun to Power Your Home
        </h1>
        <p className="text-slate-900 text-2xl leading-10">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <QuoteButton />
      </div>
      <div className="flex flex-col gap-4 max-w-[600px] mt-32">
        <p className="text-slate-900 text-lg">
          &ldquo;Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
          viverra orci dui consequat turpis scelerisque faucibus.&rdquo;
        </p>
		<Avatar
          image="/people/1.png"
          name="Rwanda Melflor"
          description="zerowaste.com"
        />
      </div>
	  <HeroImage/>
    </section>
  );
}
