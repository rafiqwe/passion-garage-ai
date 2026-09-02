import { ArrowUpRight } from "lucide-react";
import React  from "react";
import FooterSocialGrid from "./FooterSocialGrid";
import Link from "next/link";

interface FooterInfoGridProps {
  socials: { name: string; href: string }[];
  exploreLinks: { label: string; href: string }[];
  technologies: string[];
}

export const FooterInfoGrid = ({ socials, exploreLinks, technologies }: FooterInfoGridProps) => {
    return (
         <div className="grid gap-16 pt-16 border-t footer-grid-section mt-28 border-white/10 md:grid-cols-3">
          {/* Explore Grid block */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 transition group text-white/60 hover:text-cyan-400"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={14}
                      className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Grid block */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Technologies</h3>
            <ul className="space-y-4 text-white/60">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Socials Grid block */}
          <FooterSocialGrid socials={socials} />
        </div>
    )
}