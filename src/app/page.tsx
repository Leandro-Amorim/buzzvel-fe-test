import { lazy, Suspense } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Skeleton from "./components/shared/Skeleton";

const SecondSection = lazy(
  () => import("./components/second-section/SecondSection")
);
const ThirdSection = lazy(
  () => import("./components/third-section/ThirdSection")
);
const FourthSection = lazy(
  () => import("./components/fourth-section/FourthSection")
);
const FifthSection = lazy(
  () => import("./components/fifth-section/FifthSection")
);
const SixthSection = lazy(
  () => import("./components/sixth-section/SixthSection")
);
const Footer = lazy(() => import("./components/footer/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[1920px] mx-auto min-h-screen relative overflow-hidden">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <Suspense fallback={<Skeleton />}>
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
        </Suspense>
      </main>
      <Suspense fallback={<Skeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}
