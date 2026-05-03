"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

export const FloatingNav = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  const navItems = [
    { name: t.nav_home, link: "#" },
    { name: t.nav_about, link: "#about" },
    { name: t.nav_project, link: "#projects" },
    { name: t.nav_contact, link: "#contact" },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;
      if (current < 0.03) {
        setVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        setVisible(direction < 0);
      }
    }
  });

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[5000] w-full transition-colors duration-300 ${
          scrolled || mobileOpen
            ? "bg-black-100/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Main bar */}
        <div className="relative w-full px-5 md:px-10 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <span className="text-white font-bold text-sm tracking-wide z-10">
            Fikri<span className="text-purple">.</span>
          </span>

          {/* Center: Nav Links (desktop only) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            {navItems.map((navItem, idx) => (
              <a
                key={idx}
                href={navItem.link}
                className="text-neutral-400 hover:text-purple text-sm transition-colors"
              >
                {navItem.name}
              </a>
            ))}
          </div>

          {/* Right: Desktop actions */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <a
              href="/CV.Fikri.pdf"
              download
              className="flex items-center gap-1.5 text-sm font-medium text-purple hover:text-white transition-colors border border-purple/40 hover:border-purple rounded-full px-4 py-1.5"
            >
              <FaDownload size={11} />
              <span>{t.nav_download}</span>
            </a>
            <button
              onClick={toggleLanguage}
              className="border text-sm font-medium border-white/20 text-white px-3 py-1.5 rounded-full hover:border-purple/50 hover:text-purple transition-colors"
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2 z-10">
            <button
              onClick={toggleLanguage}
              className="border text-xs font-medium border-white/20 text-white px-2.5 py-1 rounded-full hover:border-purple/50 hover:text-purple transition-colors"
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white hover:text-purple transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/[0.08] px-5 py-4 flex flex-col gap-4">
            {navItems.map((navItem, idx) => (
              <a
                key={idx}
                href={navItem.link}
                onClick={handleNavClick}
                className="text-neutral-300 hover:text-purple text-sm transition-colors py-1"
              >
                {navItem.name}
              </a>
            ))}
            <a
              href="/CV.Fikri.pdf"
              download
              onClick={handleNavClick}
              className="flex items-center gap-2 text-sm font-medium text-purple border border-purple/40 rounded-full px-4 py-2 w-fit"
            >
              <FaDownload size={11} />
              {t.nav_download}
            </a>
          </div>
        )}
      </motion.nav>
    </>
  );
};
