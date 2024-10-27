import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="px-20 py-20 flex gap-16 relative">
      <div className="shrink-0 w-[509px] aspect-[509/900] relative">
        <Image
          alt="Mobile"
          src="/mobile.png"
          className={"object-contain drop-shadow-xl"}
          fill
        />
      </div>

      <div className="mt-36 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-amber-600 font-medium text-xl leading-[22px]">
              Services
            </span>
            <h2 className="text-slate-900 font-extrabold text-[3.5rem] leading-[60px]">
              Personalized services
            </h2>
          </div>
          <p className="text-slate-900 text-xl leading-9">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Et Mauris</h3>
            <span className="text-slate-900 text-lg">
              Posuere quis sed mauris non curabitur pretium elementum eget.
              Feugiat sed maecenas eu accumsan tristique.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Eget sit</h3>
            <span className="text-slate-900 text-lg">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Imperdiet pellentesque</h3>
            <span className="text-slate-900 text-lg">
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim
              viverra parturient tristique nulla.
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-20">
            <h3 className="text-2xl font-bold">Non libero</h3>
            <span className="text-slate-900 text-lg">
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus
              ut sed eros, consectetur viverra.
            </span>
          </div>
        </div>
      </div>

      <div className="absolute w-[1200px] h-[800px] rotate-[-30deg] -z-10 bg-purple-900 rounded-full -left-[680px] top-[125px]" />
    </section>
  );
}
