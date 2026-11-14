<<<<<<< HEAD
import { useEffect, useState } from "react";
import Logo from "../assets/Daily2oddsNew.webp";
import { scrollToId } from "./scrollTo.js";

const links = [
  { label: "How it Works", id: "how" },
  { label: "Sample Code", id: "sample" },
  { label: "Matchday Guide", id: "matchday" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4)
          current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#dce5f0] bg-[#fffdf9] transition-shadow duration-200 ${scrolled ? "shadow-lg shadow-[#0b1a38]/10" : ""}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6"
      >
        <a
          href="#top"
          onClick={(e) => go(e, "top")}
          className="shrink-0"
          aria-label="Daily2Odds home"
        >
          <img
            src={Logo}
            alt="SmartTips Logo"
            className="h-auto w-40 sm:w-48"
          />
        </a>
        <button
          className="rounded-lg p-2 text-2xl text-[#0b1a38] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <div
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-t border-[#dce5f0] bg-[#fffdf9] p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map(({ label, id }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={on ? "location" : undefined}
                className={`relative rounded-lg px-3 py-3 text-base font-bold transition-colors md:px-0 md:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a24a] focus-visible:ring-offset-4 ${on ? "text-[#0b1a38] after:absolute after:bottom-1 after:left-3 after:right-3 after:h-1 after:rounded-full after:bg-[#e8a24a] md:after:bottom-0 md:after:left-0 md:after:right-0" : "text-[#30415c] hover:text-[#0b1a38]"}`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#how"
            onClick={(e) => go(e, "how")}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b1a38] px-5 py-3 font-extrabold text-white shadow-md shadow-[#0b1a38]/25 transition hover:-translate-y-0.5 hover:bg-[#132d59] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#e8a24a]/50 md:mt-0"
          >
            Get Started <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
      <div aria-hidden="true" className="h-[3px] bg-[#eaf0f7]">
        <div
          className="h-full bg-gradient-to-r from-[#e8a24a] to-[#d58a32]"
          style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
        />
      </div>
    </header>
  );
};

export default Navbar;
=======
import { useEffect, useState } from "react";
import Logo from "../assets/Daily2odds.jpeg";
import { scrollToId } from "./scrollTo.js";

const links = [
  { label: "How it Works", id: "how" },
  { label: "Sample Code", id: "sample" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      className={`bg-white backdrop-blur md:sticky md:top-0 md:z-50 transition-shadow duration-300 ${
        scrolled ? "md:shadow-lg md:shadow-black/10" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-center px-4 py-2 transition-all duration-300 sm:px-8 md:justify-between ${
          scrolled ? "md:py-1" : "md:py-2"
        }`}
      >
        <a href="#top" onClick={(e) => go(e, "top")} className="shrink-0">
          <img
            src={Logo}
            alt="Daily2Odds – Predict. Play. Win."
            className={`h-14 w-auto transition-all duration-300 ${
              scrolled ? "md:h-18" : "md:h-24"
            }`}
          />
        </a>

        <div className="hidden items-center gap-9 text-lg font-semibold md:flex">
          {links.map(({ label, id }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={on ? "location" : undefined}
                className={`group relative py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8322B] focus-visible:ring-offset-4 ${
                  on ? "text-[#0E3B28]" : "text-[#1B7A4B] hover:text-[#0E3B28]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-center bg-[#C8322B] transition-transform duration-300 ${
                    on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => go(e, "contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-[#C8322B] px-6 py-2.5 text-white shadow-md shadow-[#C8322B]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#B02A24] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C8322B]/40"
          >
            Get Started
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Reading progress (desktop only) */}
      <div aria-hidden="true" className="hidden h-[3px] bg-gray-100 md:block">
        <div
          className="h-full"
          style={{
            background: "linear-gradient(90deg, #1B7A4B, #C8322B)",
            transform: `scaleX(${progress})`,
            transformOrigin: "left",
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
>>>>>>> ad7dda53d70b37b40a282e2bbb3ee1c6fad204a5
