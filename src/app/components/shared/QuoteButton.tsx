import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  `w-[306px] h-16 rounded-full flex items-center justify-center transition-all
		border-2 border-solid hover:drop-shadow-md bg-transparent`,
  {
    variants: {
      variant: {
        primary: [
          "border-purple-900",
          "text-purple-900",
          "hover:text-amber-300",
          "hover:bg-purple-900",
        ],
        secondary: [
          "border-amber-300",
          "text-amber-300",
          "hover:text-amber-900",
          "hover:bg-amber-300",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function QuoteButton({ variant, ...props }: ButtonProps) {
  return (
    <button className={button({ variant })} {...props}>
      <span className="text-2xl font-bold px-6">Request a Quote</span>
      <ArrowRight size={22} strokeWidth={2.5} />
    </button>
  );
}
