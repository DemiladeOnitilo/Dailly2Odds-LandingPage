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