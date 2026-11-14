<<<<<<< HEAD
import betslip from "../assets/betslip.png";
import { Ball, Pitch } from "./Decor";

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#0b1a38] via-[#132d59] to-[#1a3c70] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border-[28px] border-white/10 sm:h-[34rem] sm:w-[34rem]" />
        <Pitch />
        <Ball className="absolute right-[7%] top-[7%] z-10 hidden w-20 animate-bounce drop-shadow-xl [animation-duration:4s] md:block" />
        <div className="relative z-20 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-wider text-orange-200">
              <span className="h-2 w-2 rounded-full bg-orange-300" /> 
              Football tips, made clear
            </span>
            <h1 className="mt-5 max-w-2xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Make every matchday{" "}
              <span className="text-orange-500">count.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100 sm:text-xl">
              Daily football predictions, considered selections and booking
              codes for fans who want a clearer way to follow the action.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-4 font-extrabold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-1 hover:bg-orange-700"
                href="#how"
              >
                How to subscribe <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-blue-200">
              Good football, sharper picks, more matchday buzz.
            </p>
          </div>
          <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none lg:justify-end">
            <img
              src={betslip}
              alt="Daily2Odds sample bet slip"
              className="relative z-10 w-full max-w-lg rotate-2 rounded-3xl border-4 border-orange-50 shadow-2xl shadow-blue-950/50 transition duration-500 hover:rotate-0"
            />
            <div className="absolute -bottom-4 left-0 z-20 -rotate-3 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-extrabold text-blue-950 shadow-xl">
              <span className="block text-xs uppercase tracking-wider">
                Daily2Odds preview
              </span>
              See how a tip is presented
            </div>
          </div>
        </div>
      </section>
      <div className="bg-amber-600 text-blue-950">
        <div className="mx-auto grid max-w-6xl divide-y divide-amber-500/30 px-5 py-3 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-5">
          {[
            "Daily football selections",
            "Clear markets and odds",
            "Matchday picks in one place",
          ].map((label, i) => (
            <div
              className="flex items-center gap-3 py-3 font-extrabold md:justify-center md:py-1"
              key={label}
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-50 text-lg text-orange-600">
                {["⚽", "▤", "✓"][i]}
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
=======
import betslip from "../assets/betslip.png";
import { Ball, Pitch, FloatStyle } from "./Decor";
import { scrollToId } from "./scrollTo";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden px-5 py-14 text-white sm:px-8 lg:py-20"
      style={{
        background: [
          "radial-gradient(60% 50% at 8% 0%, rgba(255,255,255,0.14), transparent 70%)",
          "radial-gradient(60% 50% at 92% 0%, rgba(255,255,255,0.12), transparent 70%)",
          "linear-gradient(160deg, #082619 0%, #0E3B28 55%, #145236 100%)",
        ].join(", "),
      }}
    >
      <FloatStyle />

      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <Pitch />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,38,25,0.6), transparent 60%)" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-[#CFE0D7]">
            <Ball className="h-4 w-4" />
            Daily football predictions
          </span>

          <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Your Daily Sports Predictions, All in One Place.
          </h1>

          <p className="max-w-md text-lg font-medium text-[#CFE0D7] sm:text-xl">
            Daily2Odds shares daily betting tips and predictions for football
            fans across Nigeria, so you can follow each day’s selections without
            hunting around for them.
          </p>

          <a
            href="#how"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("how");
            }}
            className="mt-2 inline-block rounded-full bg-[#C8322B] px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#B02A24] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
          >
            See How it works
          </a>

          <p className="text-sm text-[#A9C7B8]">
            Predictions are opinions, not guarantees. Bet responsibly.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm justify-center pb-10 sm:max-w-md lg:max-w-none lg:justify-end">
          <img
            src={betslip}
            alt="Sample Daily2Odds bet slip"
            className="w-full max-w-[20rem] rounded-2xl drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)] sm:max-w-[26rem] lg:max-w-[28rem]"
          />
          <div className="d2o-float absolute -bottom-3 right-0 w-20 sm:right-2 sm:w-28 lg:-right-6 lg:w-40">
            <Ball className="h-auto w-full drop-shadow-[0_18px_22px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
>>>>>>> ad7dda53d70b37b40a282e2bbb3ee1c6fad204a5
