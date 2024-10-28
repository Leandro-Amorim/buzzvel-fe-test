import Image from "next/image";

export default function HeroImage() {
  return (
    <>
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
    </>
  );
}
