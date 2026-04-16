"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MagicButton } from "./ui/MagicButton";
import { FaPaperPlane } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { t } = useLanguage();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "63a8c4c6-596a-4d3f-98e0-57f309c132d5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("✅ Message sent successfully!");
      (event.target as HTMLFormElement).reset();
      setTimeout(() => setResult(""), 6000);
    } else {
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center dark:text-white text-black mb-4">
        {t.contact_title}
      </h2>
      <p className="text-neutral-400 text-sm md:text-base text-center max-w-2xl px-5 mb-16">
        {t.contact_subtitle}
      </p>

      <div className="w-full max-w-2xl px-4 md:px-5">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 md:gap-5 p-5 md:p-8 rounded-2xl bg-[#0F0F13] border border-white/[0.08] shadow-[0_0_30px_rgba(203,172,249,0.08)]"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-neutral-300 font-medium">
              {t.contact_name}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder={t.ph_name}
              className="bg-black-200/60 border border-white/[0.1] text-white text-sm rounded-xl focus:ring-1 focus:ring-purple focus:border-purple block w-full p-3 outline-none transition-all placeholder:text-neutral-600"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-neutral-300 font-medium">
              {t.contact_email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder={t.ph_email}
              className="bg-black-200/60 border border-white/[0.1] text-white text-sm rounded-xl focus:ring-1 focus:ring-purple focus:border-purple block w-full p-3 outline-none transition-all placeholder:text-neutral-600"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-neutral-300 font-medium">
              {t.contact_message}
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              placeholder={t.ph_message}
              className="bg-black-200/60 border border-white/[0.1] text-white text-sm rounded-xl focus:ring-1 focus:ring-purple focus:border-purple block w-full p-3 outline-none transition-all placeholder:text-neutral-600 resize-none"
            />
          </div>

          <MagicButton
            title={loading ? "Sending..." : t.contact_send}
            icon={<FaPaperPlane />}
            position="right"
            type="submit"
            otherClasses="w-full !mt-0 justify-center"
          />

          {result && (
            <p className="text-center text-sm text-purple">{result}</p>
          )}
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/vviqry"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-purple transition-colors"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mutsaqofulfikry/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-purple transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-16 text-neutral-600 text-sm text-center">
        © 2024 Mutsaqoful Fikri. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
