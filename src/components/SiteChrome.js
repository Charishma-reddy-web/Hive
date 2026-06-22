"use client";
/* eslint-disable */

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ParticleBackground from "@/components/ParticleBackground";
import SplashCursor from "@/components/SplashCursor";
import { navItems } from "@/data/siteContent";

function Logo() {
  return (
    <div className="logo">
      <div className="logo-mark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 65" fill="none" width="100%" height="100%">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.7964 36.4827C33.1471 36.283 33.588 36.4028 33.7884 36.7522C33.9888 37.1015 33.8686 37.5407 33.5279 37.7403L31.113 39.1278C30.7623 39.3274 30.3214 39.2076 30.111 38.8682C29.9106 38.5189 30.0308 38.0797 30.3815 37.8801L32.7964 36.4827ZM35.0811 36.852C34.7303 37.0516 34.2894 36.9318 34.089 36.5925C33.8886 36.2431 34.0089 35.8039 34.3596 35.6043L35.4217 34.9954C35.7724 34.7958 36.2133 34.9156 36.4137 35.2649C36.6142 35.6143 36.4939 36.0535 36.1432 36.2531L35.0811 36.852ZM36.3436 13.2955V17.857L33.8586 19.2844V15.9506C33.8586 15.172 33.4678 14.5032 32.7964 14.1239L25.8123 10.1014C25.1409 9.71208 24.3694 9.71208 23.688 10.1014C20.1809 12.1176 16.6637 14.104 13.1566 16.1202V13.2955C17.0245 11.0696 20.8823 8.85366 24.7501 6.62777L36.3436 13.2955ZM16.6237 43.2601C16.7439 43.33 16.8742 43.3699 17.0044 43.3699C17.1347 43.3699 17.265 43.33 17.3852 43.2601L19.9203 41.8028C20.1608 41.6631 20.3011 41.4235 20.3011 41.1441C20.3011 40.3954 20.3011 40.0161 20.3011 39.6867C20.3011 39.3574 20.3011 38.978 20.3011 38.2294C20.3011 37.9499 20.1608 37.7104 19.9203 37.5706L17.3852 36.1133C17.265 36.0435 17.1347 36.0035 17.0044 36.0035C16.8742 36.0035 16.7439 36.0435 16.6237 36.1133L14.0885 37.5706C13.848 37.7104 13.7078 37.9499 13.7078 38.2294C13.7078 38.978 13.7078 39.3574 13.7078 39.6867C13.7078 40.0161 13.7078 40.3954 13.7078 41.1441C13.7078 41.4235 13.848 41.6631 14.0885 41.8028L16.6237 43.2601ZM37.7364 4.03256C37.8066 4.07248 37.8767 4.09244 37.9469 4.09244C38.017 4.09244 38.0972 4.07248 38.1573 4.03256L39.5701 3.22405C39.7104 3.1442 39.7806 3.01444 39.7806 2.85474C39.7806 2.43551 39.7806 2.22589 39.7806 2.04622C39.7806 1.86655 39.7806 1.65694 39.7806 1.23772C39.7806 1.07801 39.7004 0.948257 39.5701 0.868404L38.1573 0.0598992C38.0871 0.0199729 38.017 0 37.9469 0C37.8767 0 37.7966 0.0199729 37.7364 0.0598992L36.3236 0.868404C36.1833 0.948257 36.1131 1.07801 36.1131 1.23772C36.1131 1.65694 36.1131 1.86655 36.1131 2.04622C36.1131 2.22589 36.1131 2.43551 36.1131 2.85474C36.1131 3.01444 36.1933 3.1442 36.3236 3.22405L37.7364 4.03256ZM70.5028 15.8008L59.9715 21.8596V15.9506C59.9715 15.172 59.5807 14.5032 58.9093 14.1239L51.9252 10.1014C51.2538 9.71208 50.4822 9.71208 49.8009 10.1014C46.2837 12.1176 42.7766 14.1539 39.2695 16.1701V13.2955C43.1374 11.0696 46.9952 8.85366 50.863 6.62777C54.7308 8.85366 58.5987 11.0696 62.4565 13.2955V17.2282L65.3824 15.5413V12.457C65.3924 11.7783 65.0016 11.399 64.6409 11.1993C60.2921 8.70394 55.9433 6.19856 51.6045 3.69318C51.1636 3.43366 50.6025 3.4137 50.1315 3.6832C46.0232 6.04884 41.9149 8.41447 37.8066 10.7801L25.4916 3.69318C25.0507 3.43366 24.4896 3.4137 24.0186 3.6832C19.7099 6.16861 15.4012 8.64404 11.0824 11.1195C10.5814 11.3491 10.2307 11.8581 10.2307 12.447V17.7872L3.53716 21.6401L2.78564 21.2108C2.69546 21.1609 2.59526 21.131 2.49505 21.131C2.39485 21.131 2.29465 21.1609 2.20446 21.2108L0.290589 22.3088C0.110223 22.4186 0 22.5983 0 22.8079C0 23.3768 0 23.6663 0 23.9059C0 24.1554 0 24.4349 0 25.0038C0 25.2135 0.110223 25.4031 0.290589 25.5029L2.20446 26.6009C2.29465 26.6508 2.39485 26.6807 2.49505 26.6807C2.59526 26.6807 2.69546 26.6508 2.78564 26.6009L4.69952 25.5029C4.8899 25.3931 4.99011 25.2135 4.99011 25.0038V24.1454L15.6317 18.0467V23.9957C15.6317 24.7743 16.0225 25.443 16.6938 25.8223L23.678 29.8449C24.3493 30.2342 25.1209 30.2342 25.8023 29.8449L32.7864 25.8223C33.4578 25.4331 33.8486 24.7643 33.8486 23.9957V22.6382L41.7445 18.0966V23.9857C41.7445 24.7643 42.1353 25.4331 42.8067 25.8124L49.7908 29.8349C50.4622 30.2242 51.2338 30.2242 51.9151 29.8349C55.4323 27.8186 58.9394 25.7924 62.4465 23.7761V26.6408C58.5786 28.8667 54.7208 31.0826 50.853 33.3085C47.4361 31.3421 47.2858 31.2523 39.2595 26.6408V22.8977L36.3336 24.5846V26.6508C32.4658 28.8767 28.6079 31.0926 24.7401 33.3185L13.1466 26.6508V22.8079L10.2207 24.4848L10.2307 27.4793C10.2307 27.9784 10.4912 28.4674 10.9622 28.737L23.2872 35.8239V42.5015L23.2972 50.0077C23.2972 50.5068 23.5577 50.9959 24.0287 51.2654L26.5738 52.7327L29.4897 51.0557L26.2231 49.1792V42.5015V35.8239C30.0909 33.598 33.9488 31.3821 37.8166 29.1562C43.3478 32.3303 36.9749 28.6671 49.4101 35.8239V42.5015V49.1792C45.5422 51.4051 41.6844 53.621 37.8166 55.8469C36.9849 55.3678 36.1532 54.8887 35.3115 54.4096C38.8286 52.3933 42.3458 50.377 45.8629 48.3607C46.5342 47.9714 46.925 47.3027 46.925 46.5341V38.4989C46.925 37.7204 46.5342 37.0616 45.8629 36.6723L38.8787 32.6497C38.2074 32.2605 37.4358 32.2605 36.7544 32.6497L29.7703 36.6723C29.0989 37.0616 28.7081 37.7304 28.7081 38.4989V46.5341C28.7081 47.3127 29.0989 47.9714 29.7703 48.3607L34.9007 51.3053L25.1109 56.9349L22.7861 55.5974C22.6258 55.5075 22.4555 55.4576 22.2851 55.4576C22.1148 55.4576 21.9444 55.5075 21.7841 55.5974L18.5075 57.4839C18.1868 57.6636 18.0065 57.983 18.0065 58.3423C18.0065 59.3105 18.0065 59.7996 18.0065 60.2288C18.0065 60.648 18.0065 61.1371 18.0065 62.1153C18.0065 62.4847 18.1868 62.7941 18.5075 62.9737L21.7841 64.8603C21.9444 64.9501 22.1148 65 22.2851 65C22.4555 65 22.6258 64.9601 22.7861 64.8603L26.0628 62.9737C26.3834 62.7941 26.5638 62.4747 26.5638 62.1153C26.5638 61.1471 26.5638 60.658 26.5638 60.2288V59.4403L32.4056 56.0765L33.077 56.4658L33.7584 56.8551L37.0751 58.7615C37.516 59.021 38.0771 59.041 38.5481 58.7715C42.8568 56.2961 47.1655 53.8107 51.4843 51.3352C51.9853 51.1057 52.336 50.5966 52.336 50.0077V42.5015V35.8239C56.4042 33.4882 60.4625 31.1425 64.5407 28.8068C65.0417 28.5773 65.3924 28.0682 65.3924 27.4793V22.0992L71.9758 18.3162L74.2704 19.6338C74.4307 19.7236 74.5911 19.7735 74.7614 19.7735C74.9318 19.7735 75.1021 19.7236 75.2524 19.6338L78.509 17.7572C78.8196 17.5776 79 17.2681 79 16.9088C79 15.9406 79 15.4615 79 15.0323C79 14.613 79 14.1239 79 13.1657C79 12.8064 78.8196 12.4969 78.509 12.3173L75.2524 10.4407C75.0921 10.3509 74.9318 10.301 74.7614 10.301C74.5911 10.301 74.4207 10.3509 74.2704 10.4407L71.0138 12.3173C70.7032 12.4969 70.5228 12.8064 70.5228 13.1657C70.5228 14.1339 70.5228 14.613 70.5228 15.0323H70.5028ZM57.4163 20.1328C57.777 19.9232 57.9975 19.5439 57.9975 19.1347V16.26C57.9975 15.8507 57.777 15.4615 57.4163 15.2618L51.4241 11.8182C51.0634 11.6086 50.6225 11.6086 50.2618 11.8182L44.2697 15.2618C43.9089 15.4714 43.6885 15.8507 43.6885 16.26V19.1347C43.6885 19.5439 43.9089 19.9332 44.2697 20.1328H57.4163ZM31.8044 23.5066V16.3698C31.8044 16.0604 31.6441 15.7809 31.3735 15.6312L25.171 12.0677C24.9104 11.918 24.5798 11.918 24.3092 12.0677L18.1067 15.6312C17.8461 15.7809 17.6758 16.0703 17.6758 16.3698V23.5066C17.6758 23.816 17.8361 24.0955 18.1067 24.2452L24.3092 27.8087C24.5698 27.9584 24.9004 27.9584 25.171 27.8087L31.3735 24.2452C31.6441 24.0855 31.8044 23.8061 31.8044 23.5066Z"
            fill="#00F0A8"
          />
        </svg>
      </div>
      <span className="logo-name">
        Nurture<span style={{ color: '#1ae9ab' }}>Hive</span>
      </span>
    </div>
  );
}

export function Navbar() {
  const [activeHref, setActiveHref] = useState("");

  const handleHeaderScroll = (event, href) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const target = document.querySelector(href);
    const header = document.querySelector(".nav");

    if (!target || !header) {
      return;
    }

    const headerRect = header.getBoundingClientRect();
    const top = target.getBoundingClientRect().top + window.scrollY - headerRect.bottom - 2;
    setActiveHref(href);

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth"
    });
  };

  const handleHomeClick = () => {
    setActiveHref("");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="nav">
      <Link href="/" className="unstyled-link" onClick={handleHomeClick}>
        <Logo />
      </Link>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={activeHref === item.href ? "active" : ""}
            onClick={(event) => handleHeaderScroll(event, item.href)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="#contact" className="nav-cta" onClick={(event) => handleHeaderScroll(event, "#contact")}>
        Schedule Strategy Session
      </Link>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="about" data-page="11">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>AI-native growth intelligence for modern businesses in the AI era.</p>
        </div>
        <div className="footer-col">
          <h5>Intelligence</h5>
          <Link href="/intelligence-systems">Search Intelligence</Link>
          <Link href="/intelligence-systems">Demand Systems</Link>
          <Link href="/intelligence-systems">Content Ecosystems</Link>
          <Link href="/intelligence-systems">Revenue Intelligence</Link>
        </div>
        <div className="footer-col">
          <h5>Industries</h5>
          <Link href="/industries">SaaS</Link>
          <Link href="/industries">AI Startups</Link>
          <Link href="/industries">Enterprise Tech</Link>
          <Link href="/industries">GCCs</Link>
        </div>
        <div className="footer-col">
          <h5>Insights</h5>
          <Link href="/insights">AI Growth Blog</Link>
          <Link href="/framework">GTM Reports</Link>
          <Link href="/insights">GEO/AEO Guides</Link>
          <Link href="/framework">Frameworks</Link>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <Link href="#about">About</Link>
          <Link href="#cases">Case Studies</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NurtureHive. All rights reserved.</p>
        <p>hello@nurturehive.com</p>
      </div>
    </footer>
  );
}

export function SiteShell({ children }) {
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const targetPages = new Set([1, 6, 10]);
    let rafId = 0;

    const updateCursorState = () => {
      const sections = Array.from(document.querySelectorAll(".nh [data-page]"));

      if (!sections.length) {
        setCursorEnabled(false);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let bestPage = 1;
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);
        const page = Number(element.getAttribute("data-page"));

        if (distance < bestDistance) {
          bestDistance = distance;
          bestPage = Number.isFinite(page) ? page : bestPage;
        }
      });

      setCursorEnabled(targetPages.has(bestPage));
    };

    const scheduleUpdate = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateCursorState);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <>
      <SplashCursor
        enabled={cursorEnabled}
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        PRESSURE_ITERATIONS={3}
        DENSITY_DISSIPATION={6}
        VELOCITY_DISSIPATION={4}
        PRESSURE={0.5}
        CURL={7}
        SPLAT_RADIUS={0.14}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={10}
        SHADING={false}
        RAINBOW_MODE={false}
        COLOR="#1ae9ab"
      />
      <main className="nh">
        <ParticleBackground />
        {pathname !== "/" ? (
          <div className="nh-subpage-layout">
            <Navbar />
            <div className="nh-subpage-content-card">
              {children}
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </main>
    </>
  );
}


