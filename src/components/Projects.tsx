"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type FilterKey = "all" | "fullstack" | "landing" | "tools" | "games";

const projectsList = [
  // ===== FULLSTACK APPS =====
  {
    id: 1,
    title: "Chill Movie App",
    keyDesc: "proj1_desc",
    img: "/fullstack-chill-movie.png",
    repo: "https://github.com/vviqry/fullstack-chill-movie",
    live: "https://fullstack-chill-movie.vercel.app/",
    tags: ["Next.js", "React", "Tailwind", "Redux", "Zustand", "MySQL", "Axios"],
    category: "fullstack" as FilterKey,
  },
  {
    id: 2,
    title: "Music API - Upload & Play",
    keyDesc: "proj2_desc",
    img: "https://api.microlink.io/?url=https://music-api-steel-beta.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/Music-API",
    live: "https://music-api-steel-beta.vercel.app/",
    tags: ["Node.js", "Express", "MySQL", "Multer"],
    category: "fullstack" as FilterKey,
  },
  // ===== LANDING PAGE =====
  {
    id: 3,
    title: "Mixue Landing Page",
    keyDesc: "proj3_desc",
    img: "https://api.microlink.io/?url=https://vviqry.github.io/Mixue/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/Mixue",
    live: "https://vviqry.github.io/Mixue/",
    tags: ["HTML", "CSS", "Bootstrap"],
    category: "landing" as FilterKey,
  },
  {
    id: 4,
    title: "Pisang Keju Crispy Jefri",
    keyDesc: "proj4_desc",
    img: "https://api.microlink.io/?url=https://pisang-keju-jefri.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/Pisang-keju",
    live: "https://pisang-keju-jefri.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "landing" as FilterKey,
  },
  {
    id: 5,
    title: "Kue Bolu Viral 15000",
    keyDesc: "proj5_desc",
    img: "https://api.microlink.io/?url=https://kue-bolu-viral.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/Kue-Bolu-Viral",
    live: "https://kue-bolu-viral.vercel.app/",
    tags: ["React", "TypeScript", "Vite"],
    category: "landing" as FilterKey,
  },
  {
    id: 6,
    title: "WebPro Studio",
    keyDesc: "proj6_desc",
    img: "https://api.microlink.io/?url=https://webpro-studio.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/WebPro-Studio",
    live: "https://webpro-studio.netlify.app/",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "landing" as FilterKey,
  },
  {
    id: 15,
    title: "Juice Stop",
    keyDesc: "proj15_desc",
    img: "/Jus.png",
    repo: "https://github.com/vviqry/juice",
    live: "https://juice-vert.vercel.app/",
    tags: ["Next.js", "React", "Tailwind", "Zustand"],
    category: "landing" as FilterKey,
  },
  // ===== WEB TOOLS =====
  {
    id: 7,
    title: "To-Do List App",
    keyDesc: "proj7_desc",
    img: "https://api.microlink.io/?url=https://vviqry.github.io/todo_list/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/To-do-list-A",
    live: "https://vviqry.github.io/todo_list/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "tools" as FilterKey,
  },
  {
    id: 8,
    title: "Age Calculator",
    keyDesc: "proj8_desc",
    img: "/mf-age-calculator.png",
    repo: "https://github.com/vviqry/age-calculator",
    live: "https://mf-age-calculator.netlify.app/",
    tags: ["React", "TypeScript", "Vite"],
    category: "tools" as FilterKey,
  },
  {
    id: 9,
    title: "CSS Gradient Generator",
    keyDesc: "proj9_desc",
    img: "https://api.microlink.io/?url=https://mf-css-gradient-generator.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/background-generator",
    live: "https://mf-css-gradient-generator.netlify.app/",
    tags: ["React", "TypeScript", "Vite"],
    category: "tools" as FilterKey,
  },
  {
    id: 10,
    title: "Business Model Canvas",
    keyDesc: "proj10_desc",
    img: "https://api.microlink.io/?url=https://vviqry.github.io/Bisnis_model_canvas/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/Bisnis_model_canvas",
    live: "https://vviqry.github.io/Bisnis_model_canvas/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "tools" as FilterKey,
  },
  {
    id: 11,
    title: "Expand Button",
    keyDesc: "proj11_desc",
    img: "https://api.microlink.io/?url=https://vviqry.github.io/expand-button/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/expand-button",
    live: "https://vviqry.github.io/expand-button/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "tools" as FilterKey,
  },
  {
    id: 12,
    title: "Basic Contact Form",
    keyDesc: "proj12_desc",
    img: "https://api.microlink.io/?url=https://mf-basic-contact-form.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
    repo: "https://github.com/vviqry/basic-contact-form",
    live: "https://mf-basic-contact-form.netlify.app/",
    tags: ["React", "Vite", "Tailwind"],
    category: "tools" as FilterKey,
  },
  // ===== MINI GAMES =====
  {
    id: 13,
    title: "Tembak Koruptor JS",
    keyDesc: "proj13_desc",
    img: "/tembakkoruptor.png",
    repo: "https://github.com/vviqry/tembakkoruptor",
    live: "https://vviqry.github.io/tembakkoruptor/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "games" as FilterKey,
  },
  {
    id: 14,
    title: "Drum Kit Interaktif",
    keyDesc: "proj14_desc",
    img: "/Drum_Kit.png",
    repo: "https://github.com/vviqry/Drum_Kit",
    live: "https://vviqry.github.io/Drum_Kit/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "games" as FilterKey,
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("fullstack");

  const filters: { key: FilterKey; labelKey: keyof typeof t }[] = [
    { key: "all", labelKey: "filter_all" },
    { key: "fullstack", labelKey: "filter_fullstack" },
    { key: "landing", labelKey: "filter_landing" },
    { key: "tools", labelKey: "filter_tools" },
    { key: "games", labelKey: "filter_games" },
  ];

  const filtered =
    activeFilter === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center dark:text-white text-black mb-4">
        {t.port_title}
      </h2>
      <p className="text-neutral-400 text-sm md:text-base text-center max-w-2xl px-5 mb-10">
        {t.port_subtitle}
      </p>

      {/* Filter Buttons — single scrollable row, no wrap */}
      <div className="w-full overflow-x-auto mb-12 px-5">
        <div className="flex flex-nowrap gap-2 justify-start md:justify-center min-w-max mx-auto">
          {filters.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-all duration-200 ${
                activeFilter === key
                  ? "bg-purple text-black border-purple"
                  : "border-white/20 text-neutral-400 hover:border-purple/50 hover:text-purple"
              }`}
            >
              {t[labelKey] as string}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 px-4 md:px-5 max-w-7xl w-full">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="group relative flex flex-col justify-between p-5 rounded-2xl bg-[#0F0F13] border border-white/[0.1] hover:border-purple/50 transition-all duration-300"
          >
            <div className="w-full h-40 sm:h-44 md:h-48 relative overflow-hidden rounded-xl mb-4 bg-slate-800">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white line-clamp-1">{proj.title}</h3>
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-purple transition-colors ml-2 flex-shrink-0"
                  title="View Source on GitHub"
                >
                  <FaGithub size={22} />
                </a>
              </div>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {t[proj.keyDesc as keyof typeof t] as string}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1">
                {proj.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-md bg-white/5 text-purple border border-purple/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={proj.live}
                target="_blank"
                rel="noreferrer"
                className="text-purple hover:text-white flex items-center gap-1 text-sm transition-colors"
                title="View Live Site"
              >
                <span>Live</span>
                <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
