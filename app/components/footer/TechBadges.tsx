import React from "react";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "GSAP",
  "Tailwind CSS",
  "Google Gemini",
  "Vercel",
];

export const TechBadges = () => {
  return (
    <div className="mt-20">
      <p className="footer-sub mb-8 text-center uppercase tracking-[0.4em] text-white/40 text-sm">
        Built With
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="px-6 py-3 text-white transition duration-300 border rounded-full tech-badge border-white/10 bg-white/5 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};
