import Link from "next/link";

import navLinks from "@/data/navData.json";
import footerData from "@/data/footerData.json";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0d0d0d] rounded-t-[2rem] px-8 py-10 md:px-20 md:pt-20 md:pb-10 w-full">

      {/* Row 1: Logo | Nav | Socials */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 md:mb-16">

        {/* Logo */}
        <Link href="/" className="text-[1.75rem] font-bold leading-none whitespace-nowrap">
          <span className="text-white">{footerData.logo.main}</span>
          <span className="text-[#22c55e]">{footerData.logo.highlight}</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {navLinks.map((link) => {
            const isNonNavigable = false;

            if (isNonNavigable) {
              return (
                <span
                  key={link.label}
                  className="text-white text-[0.95rem] hover:text-[#22c55e] transition-colors duration-200 cursor-default"
                >
                  {link.label}
                </span>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-[0.95rem] hover:text-[#22c55e] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={footerData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-[#22c55e] hover:text-[#22c55e] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.57c0-2.04-.04-4.66-2.84-4.66-2.85 0-3.28 2.22-3.28 4.52V24h-4V8.5z" />
            </svg>
          </a>

          <a
            href={footerData.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-[#22c55e] hover:text-[#22c55e] transition-colors duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.735-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Row 2: Contact */}
      <div>
        <Link
          href={footerData.contact.href}
          className="inline-block bg-[#22c55e] text-white text-sm font-semibold px-5 py-2 rounded-full mb-5 hover:bg-[#1ebd56] hover:scale-105 transition-all duration-200"
        >
          {footerData.contact.buttonText}
        </Link>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 text-white text-[0.95rem]">
          <span><span className="font-medium">Email:</span> {footerData.contact.email}</span>
          <span><span className="font-medium">Phone:</span> {footerData.contact.phone}</span>
          <span><span className="font-medium">Address:</span> {footerData.contact.address}</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/15 my-8" />

      {/* Row 3: Copyright */}
      <p className="text-white text-[0.9rem]">
        <span className="font-bold">{footerData.copyright.bold}</span>{" "}
        {footerData.copyright.text}
      </p>

    </footer>
  );
}
