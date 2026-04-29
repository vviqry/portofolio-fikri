"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MagicButton } from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-20 w-full flex justify-center">
      <div className="max-w-5xl w-full px-4 md:px-5">
        {/* About Card */}
        <div className="rounded-2xl bg-[#0F0F13] border border-white/[0.08] p-6 md:p-10 flex flex-col gap-6">
          <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed">
            {t.about_desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5 pt-5 border-t border-white/10">
            {/* Photo + Stat */}
            <div className="flex items-center gap-4">
              <Image
                src="/foto.jpg"
                alt="Mutsaqoful Fikri"
                width={72}
                height={72}
                className="rounded-full border-2 border-purple/40 object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl font-bold text-purple">
                  1<span className="text-2xl md:text-3xl">+</span>
                </div>
                <div className="text-neutral-400 text-[10px] md:text-xs uppercase tracking-widest">
                  {t.about_exp}
                </div>
              </div>
            </div>

            {/* Download CV */}
            <a href="/CV_M.Fikri.pdf" download className="w-full sm:w-auto">
              <MagicButton
                title={t.nav_download}
                icon={<FaDownload />}
                position="right"
                wrapperClasses="w-full sm:w-auto"
                otherClasses="w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
