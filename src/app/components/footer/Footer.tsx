import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-20 py-6 flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={56} height={32} />
        <span className="text-slate-900 font-bold text-2xl">Soller</span>
      </div>
      <span>@ 2024 Soller, Inc. All rights reserved.</span>
      <div className="flex items-center ml-auto gap-6 py-3">
        <Link href={"/#terms"}>Terms</Link>
        <Link href={"/#privacy"}>Privacy</Link>
        <Link href={"/#support"}>Support</Link>
      </div>
    </footer>
  );
}
