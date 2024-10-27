import Avatar, { AvatarProps } from "../shared/Avatar";

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
      onClick={() => setSelected(index)}
      className="cursor-pointer relative w-[364px] h-[442px] shrink-0 flex flex-col justify-end pb-8"
    >
      <div
        onClick={() => setSelected(index)}
        className={`cursor-pointer absolute bg-white shadow-lg rounded-xl inset-x-0 ${
          index === selected ? "-inset-y-6" : "inset-y-0"
        }`}
      />
      <div className="flex flex-col gap-8 px-8 relative z-10">
        <p className="text-slate-900 text-lg">{testimony}</p>
        <Avatar image={image} name={name} description={description} />
      </div>
    </div>
  );
}
