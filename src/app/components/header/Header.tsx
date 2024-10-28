import Link from "next/link";
import QuoteButton from "../shared/QuoteButton";
import { Headphones } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 ">
      <div className="flex items-center gap-[38px]">
        <span className="text-[32px] font-bold">soller</span>
        <nav className="items-center gap-4 hidden xl:flex">
          <Link
            href={"/#products"}
            className="font-medium text-slate-900 px-2 py-3"
          >
            Products
          </Link>
          <Link
            href={"/#solutions"}
            className="font-medium text-slate-900 px-2 py-3"
          >
            Solutions
          </Link>
          <Link
            href={"/#services"}
            className="font-medium text-slate-900 px-2 py-3"
          >
            Services
          </Link>
          <Link
            href={"/#configure"}
            className="font-medium text-slate-900 px-2 py-3"
          >
            Configure
          </Link>
        </nav>
      </div>
      <div className="items-center gap-8 hidden xl:flex">
        <div className="flex items-center px-2 py-3 gap-4">
          <Headphones className="text-sky-700" size={22} strokeWidth={2.25} />
          <span className="text-sky-700 font-medium">555 818 282</span>
        </div>
        <QuoteButton />
      </div>
    </header>
  );
}
