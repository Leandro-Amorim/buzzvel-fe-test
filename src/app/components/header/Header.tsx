import Link from "next/link";
import QuoteButton from "../shared/QuoteButton";
import { Headphones } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-20">
      <div className="flex items-center gap-[38px]">
        <span className="text-[32px] font-bold">soller</span>
        <nav className="flex items-center gap-4">
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
      <div className="flex items-center gap-8">
        <div className="flex items-center px-2 py-3 gap-4">
          <Headphones className="text-sky-700" size={22} strokeWidth={2.25} />
          <span className="text-sky-700 font-medium">555 818 282</span>
        </div>
        <QuoteButton />
      </div>
    </header>
  );
}
