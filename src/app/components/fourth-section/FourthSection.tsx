import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="px-20 py-20 flex gap-[118px] relative">

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-amber-600 font-medium text-xl leading-[22px]">
              System features
            </span>
            <h2 className="text-slate-900 font-extrabold text-[3.5rem] leading-[60px]">
              Powerful features
            </h2>
          </div>
          <p className="text-slate-900 text-xl leading-9">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Erat sit</h3>
            <span className="text-slate-900 text-lg">
              Id quis lectus pharetra, ultricies integer montes, amet, gravida
              consectetur. Nunc convallis fringilla nisl magna sagittis.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Ullamcorper arcu</h3>
            <span className="text-slate-900 text-lg">
              Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus
              auctor habitant duis dictum.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Et pellentesque</h3>
            <span className="text-slate-900 text-lg">
              Mi vitae, massa eu molestie massa euismod volutpat condimentum.
              Blandit molestie ullamcorper hendrerit purus lorem vulputate.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Amet egestas</h3>
            <span className="text-slate-900 text-lg">
              Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada
              velit et, ullamcorper malesuada amet, felis.
            </span>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-[462px] aspect-[462/900] relative left-[42px]">
        <Image
          alt="Mobile"
          src="/mobile2.png"
		  fill
		  className="object-contain drop-shadow-xl" 
		  />
      </div>

      <div className="absolute w-[1200px] h-[800px] rotate-[-30deg] -z-10 bg-amber-400 rounded-full -right-[680px] top-[45px]" />
    </section>
  );
}
