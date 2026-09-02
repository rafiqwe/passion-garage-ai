import { ArrowUpRight } from "lucide-react";
import React from "react";

interface Social {
  name: string;
  href: string;
}

interface FooterSocialGridProps {
  socials: Social[];
}

const FooterSocialGrid = ({ socials }: FooterSocialGridProps) => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">Connect</h3>
      <ul className="space-y-4">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition group text-white/60 hover:text-cyan-400"
            >
              {social.name}
              <ArrowUpRight
                size={14}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocialGrid;
