import betslip from "../assets/betslip.png";
import { Rings } from "./Decor";

export default function Sample() {
  return (
    <section
      id="sample"
      className="relative isolate overflow-hidden bg-[#f5e9d9] px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#ead8be]" />
      <Rings className="pointer-events-none absolute -right-28 -top-28 z-0 w-80 opacity-20 sm:w-96" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="text-sm font-extrabold uppercase tracking-[.18em] text-orange-700">
            Inside the slip
          </span>
          <h2 className="mt-2 text-4xl font-black leading-tight tracking-tight text-blue-950 sm:text-5xl">
            A closer look at a daily tips card
          </h2>
          <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-slate-700">
            A peek at the kind of bet slip Daily2Odds shares. More matchday
            selections are on the way.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={betslip}
            alt="Daily2Odds sample bet slip"
            className="w-full max-w-xl rotate-1 rounded-3xl border-8 border-orange-50 shadow-[0_12px_0_#d8c2a2,0_26px_50px_#382b1c18] transition duration-500 hover:rotate-0"
          />
        </div>
      </div>
    </section>
  );
}
