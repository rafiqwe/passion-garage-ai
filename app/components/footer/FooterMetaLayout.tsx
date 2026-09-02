import Link from "next/link";
import React from "react";

export const FooterMetaLayout = () => {
  return (
    <div className="pt-8 mt-16 border-t footer-grid-section border-white/10">
      <div className="flex flex-col text-center items-center justify-between gap-6 md:flex-row">
        <div>
          <h4 className="text-lg font-semibold text-white">
            Designed & Developed
          </h4>
          <Link
            href={"https://muhammadrabbi.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-white/50 hover:underline transition hover:text-blue-300 hover:-translate-y-1 hover:translate-x-1"
          >
            Muhammad Rabbi
          </Link>
        </div>

        <div className="text-center md:text-right">
          <p className="text-white/40">Every legend starts with passion.</p>
          <p className="mt-2 text-sm text-white/30">
            © {new Date().getFullYear()} Passion Garage • Built for the DEV
            Weekend Challenge
          </p>
        </div>
      </div>
    </div>
  );
};
