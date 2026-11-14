<<<<<<< HEAD
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
=======
import Logo from "../assets/Daily2odds.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#171C1A] px-6 pb-10 pt-14 text-[15px] text-[#B9C4BF] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-3">
            {/* White panel keeps the logo readable on the dark footer */}
            <div className="rounded-xl bg-white px-4 py-1.5">
              <img
                src={Logo}
                alt="Daily2Odds – Predict. Play. Win."
                className="h-12 w-auto sm:h-14"
              />
            </div>
            <p className="max-w-xs">
              Daily sports betting tips and predictions for Nigerian football
              fans.
            </p>
          </div>

          <p className="md:text-right">
            © {new Date().getFullYear()} Daily2Odds. All rights reserved.
          </p>
        </div>

        <p className="mt-10 max-w-3xl border-t border-[#2B3430] pt-6 text-sm text-[#98A59F]">
          <strong className="font-bold text-[#E7EEEA]">Gamble responsibly.</strong>{" "}
          You must be 18 or older to bet. Betting involves risk and can be
          addictive. Predictions are opinions and do not guarantee winnings.
          Only bet what you can afford to lose, and seek help if gambling stops
          being fun.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> ad7dda53d70b37b40a282e2bbb3ee1c6fad204a5
