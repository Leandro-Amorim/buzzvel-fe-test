import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

export default function TestimonyButton(props: ButtonProps) {
  const { direction, disabled, onClick } = props;
  return (
    <button
      {...props}
      className={`size-12 rounded-full border-2 border-solid border-amber-300 text-amber-300
		flex items-center justify-center transition-all hover:drop-shadow-md bg-transparent cursor-pointer
		${!disabled ? "hover:text-amber-900 hover:bg-amber-300" : "opacity-50"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "left" ? (
        <ArrowLeft size={20} strokeWidth={2} />
      ) : (
        <ArrowRight size={20} strokeWidth={2} />
      )}
    </button>
  );
}
