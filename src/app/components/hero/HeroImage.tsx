import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="absolute -z-10 w-[1650px] h-[770px] top-4 translate-x-1/2 -translate-y-1/2 rotate-[-45deg] -right-2 bg-sky-200 rounded-l-[60%_100%] overflow-hidden border border-solid border-black">
      <div className="absolute size-6 rounded-full bg-blue-100 top-[200px] left-[500px]" />
      <Image
        src="/hero.png"
        alt="Hero Image"
        width={680}
        height={(1018 / 1346) * 680}
        className="relative origin-center rotate-[45deg] right-[65px] top-[185px]"
      />
    </div>
  );
}