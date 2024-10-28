import Image from "next/image";
import { AvatarProps } from "../shared/Avatar";

export interface CardProps extends AvatarProps {
  testimony: string;
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export default function TestimonyCard(props: CardProps) {
  const { index, selected, setSelected, testimony, name, image, description } =
    props;
  return (
    <div
      style={{ translate: `calc(-${selected * 100}% - ${selected * 24}px` }}
      onClick={() => setSelected(index)}
      className="cursor-pointer relative w-[364px] max-w-full h-[311px] md:h-[442px] shrink-0 flex flex-col justify-end pb-8"
    >
      <div
        onClick={() => setSelected(index)}
        className={`cursor-pointer absolute bg-white shadow-lg rounded-xl inset-x-0 ${
          index === selected ? "inset-y-0 md:-inset-y-6" : "inset-y-0"
        }`}
      />
      <div className="flex flex-col justify-end gap-8 px-8 relative z-10 overflow-hidden">
        <p className="text-slate-900 md:text-lg overflow-x-hidden overflow-y-auto">
          {testimony}
        </p>
        <div className="flex gap-2 md:gap-4">
          <div className="size-12 md:size-16 rounded-full bg-slate-900 relative overflow-hidden shrink-0">
            <Image src={image} alt={name} className="object-cover" fill />
          </div>
          <div className="grow flex flex-col justify-center">
            <span className="text-slate-900 text-base md:text-lg line-clamp-1">{name}</span>
            <span className="text-slate-600 textsm md:text-base line-clamp-1">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
