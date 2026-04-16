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

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-3xl lg:max-w-[65vw] flex flex-col items-center justify-center">


          {/* Profile Photo */}
          <div className="mb-6 relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple/50 shadow-[0_0_25px_rgba(203,172,249,0.3)]">
              <Image
                src="/foto.jpg"
                alt="Mutsaqoful Fikri"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl text-neutral-300 mb-2">
            {t.hero_hi} <span className="font-bold text-white">Mutsaqoful Fikri</span>
          </p>

          <TextGenerateEffect
            words={`${t.hero_web} ${t.hero_developer}`}
            className="text-center text-[36px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center max-w-xl text-xs md:text-sm lg:text-base text-gray-400 mb-10 mt-4">
            {t.hero_desc}
          </p>

          <div className="flex items-center">
            <MagicButton
              title={t.hero_btn}
              icon={<FaLocationArrow />}
              position="right"
              wrapperClasses="md:w-60 md:mt-10"
              handleClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
