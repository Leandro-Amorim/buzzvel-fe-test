import Image from "next/image";

export interface AvatarProps {
	image: string;
	name: string;
	description: string;
}

export default function Avatar({ image, name, description }: AvatarProps) {
  return (
    <div className="flex gap-4">
      <div className="size-16 rounded-full bg-slate-900 relative overflow-hidden shrink-0">
        <Image src={image} alt={name} className="object-cover" fill />
      </div>
      <div className="grow flex flex-col justify-center">
		<span className="text-slate-900 text-lg">{name}</span>
		<span className="text-slate-600">{description}</span>
	  </div>
    </div>
  );
}
