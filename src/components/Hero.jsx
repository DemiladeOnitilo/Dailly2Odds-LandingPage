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
