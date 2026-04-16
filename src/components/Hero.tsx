"use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-16 pt-28 md:pt-36 relative min-h-screen flex flex-col justify-center">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT: Text */}
          <div className="flex flex-col items-start max-w-xl w-full">
            <p className="text-sm md:text-base text-neutral-300 mb-2">
              {t.hero_hi} <span className="font-bold text-white">Mutsaqoful Fikri</span>
            </p>

            <TextGenerateEffect
              words={`${t.hero_web} ${t.hero_developer}`}
              className="text-left text-[36px] md:text-5xl lg:text-6xl"
            />

            {/* Profile photo — mobile only (between title and desc) */}
            <div className="flex md:hidden justify-center w-full my-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-purple/50 shadow-[0_0_40px_rgba(203,172,249,0.35)]">
                <Image
                  src="/foto.jpg"
                  alt="Mutsaqoful Fikri"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            <p className="text-left max-w-xl text-xs md:text-sm lg:text-base text-gray-400 mb-8">
              {t.hero_desc}
            </p>

            <MagicButton
              title={t.hero_btn}
              icon={<FaLocationArrow />}
              position="right"
              wrapperClasses="md:w-52"
              handleClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>

          {/* RIGHT: Profile photo — desktop only */}
          <div className="hidden md:flex items-center justify-center flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-purple/50 shadow-[0_0_50px_rgba(203,172,249,0.4)]">
              <Image
                src="/foto.jpg"
                alt="Mutsaqoful Fikri"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
