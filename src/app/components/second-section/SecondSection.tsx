import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="px-20 py-20 flex flex-col items-center gap-20 relative">
      <div className="flex flex-col items-center gap-6 w-full max-w-[900px]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-amber-600 font-medium text-xl leading-[22px]">
            No more waste
          </span>
          <h2 className="text-slate-900 font-extrabold text-[3.5rem] leading-[60px]">
            Pick the Sun
          </h2>
        </div>

        <p className="text-slate-900 text-xl leading-9 max-w-4xl text-center">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="w-full max-w-[1520px] aspect-[1520/854] relative">
        <Image
          alt="Desktop"
          src="/desktop.png"
          fill
          className="object-contain drop-shadow-xl"
        />
      </div>
      <div className="absolute size-[710px] -z-10 bg-amber-500 rounded-full -left-[290px] top-[190px]" />
      <div className="absolute size-[597px] -z-10 bg-purple-700 rounded-full -right-[120px] top-[390px]" />
    </section>
  );
}

/**
 * 
 * 	

 */
