import Logo from "../assets/Daily2oddsNew.webp";

export default function Footer() {
  return (
    <footer className="bg-blue-950 px-6 py-9 text-blue-100 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <a href="#top" aria-label="Back to top">
            <img
              src={Logo}
              alt="Daily2Odds — Predict. Play. Win."
              className="w-44 rounded-xl bg-white p-1.5"
            />
          </a>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-200">
            Your daily home for football tips, matchday chat and the games we
            can’t wait to watch. Follow the fun, make your own calls and enjoy
            the football.
          </p>
        </div>
        <small className="text-xs text-blue-300">
          © {new Date().getFullYear()} Daily2Odds. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
