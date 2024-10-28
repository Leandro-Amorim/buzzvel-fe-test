import Image from "next/image";

export default function FourthSection() {
  return (
    <section
      className={`
	px-4 md:px-10 xl:px-20
	py-12 md:py-16 xl:py-20
	flex flex-col items-center lg:items-start lg:flex-row gap-16 lg:gap-[118px] relative`}
    >
      <div className="flex flex-col gap-12 grow">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span
              className={`text-amber-600 font-medium text-center lg:text-left
			text-base leading-[18px]
			md:text-lg md:leading-[20px]
			xl:text-xl xl:leading-[22px]`}
            >
              System features
            </span>
            <h2
              className={`text-slate-900 text-center lg:text-left
		  font-bold text-[2rem] leading-[36px]
		  md:text-[3rem] md:leading-[52px]
			xl:font-extrabold xl:text-[3.5rem] xl:leading-[60px]`}
            >
              Powerful features
            </h2>
          </div>
          <p
            className={`text-slate-900 text-center lg:text-left
			text-base leading-7
			md:text-lg md:leading-8
			xl:text-xl xl:leading-9`}
          >
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 pt-20">
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Erat sit
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Ullamcorper arcu
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Et pellentesque
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3
              className={`
				text-xl font-medium text-center
				lg:text-2xl lg:font-bold lg:text-start`}
            >
              Amet egestas
            </h3>
            <span
              className={`text-slate-900
			text-base text-center
			lg:text-lg lg:text-start`}
            >
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </span>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-[250px] sm:w-[380px] lg:w-[462px] aspect-[462/900] relative lg:left-[42px]">
        <Image
          alt="Mobile"
          src="/mobile2.png"
          fill
          className="object-contain drop-shadow-xl"
        />
      </div>

      <div
        className={`absolute rotate-[-30deg] -z-10 bg-amber-400 rounded-full right-0
		w-[680px] h-[400px] translate-x-[45%] bottom-[130px]
		sm:w-[1000px] sm:h-[500px] sm:translate-x-[40%] sm:bottom-[200px]
		lg:w-[1200px] lg:h-[800px] lg:translate-x-[50%] lg:top-[45px]`}
      />
    </section>
  );
}
