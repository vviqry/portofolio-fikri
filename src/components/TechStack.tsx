"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const techItems = [
  { name: "React JS", label: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", label: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", label: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", label: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "JavaScript", label: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", label: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node JS", label: "JS Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", label: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redux", label: "State Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Vite", label: "Build Tool", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Zustand", label: "State Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },
  { name: "Axios", label: "HTTP Client", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" },
  { name: "VS Code", label: "Code Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "GitHub", label: "Repository", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", label: "Design App", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", label: "Deployment", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
];

const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section id="tools" className="py-20 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center dark:text-white text-black mb-4">
        {t.tools_title}
      </h2>
      <p className="text-neutral-400 text-sm md:text-base text-center max-w-2xl px-5 mb-12">
        {t.tools_subtitle}
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 max-w-6xl px-4 md:px-5 w-full">
        {techItems.map((tech, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 rounded-xl md:rounded-2xl bg-[#0F0F13] border border-white/[0.08] hover:border-purple/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(203,172,249,0.1)]"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width={32}
              height={32}
              className="group-hover:scale-110 transition-transform duration-300 w-7 h-7 md:w-9 md:h-9"
              style={{ filter: tech.name === "Zustand" || tech.name === "GitHub" || tech.name === "Vercel" ? "invert(1)" : undefined }}
            />
            <div className="text-center hidden sm:block">
              <p className="text-white text-[10px] font-semibold leading-tight">{tech.name}</p>
              <p className="text-neutral-500 text-[9px] capitalize">{tech.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
