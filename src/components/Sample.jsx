<<<<<<< HEAD
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
=======
import betslip from "../assets/betslip.png";

const Sample = () => {
  return (
    <section
      id="sample"
      className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #101513 0%, #101513 25%, #0E3B28 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-tight text-[#5CC48C] sm:text-5xl">
            A clear look at every daily slip
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#EAF0ED] lg:mx-0">
            Each day’s selections, odds and booking code laid out in one tidy
            card. Everything shown here is placeholder content until real
            details are supplied.
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full bg-[#1B7A4B]/40 blur-3xl sm:h-80 sm:w-80"
          />
          <img
            src={betslip}
            alt="Sample betting code card with placeholder content"
            className="w-full max-w-xs rotate-2 rounded-2xl drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:rotate-0 sm:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Sample;
>>>>>>> ad7dda53d70b37b40a282e2bbb3ee1c6fad204a5
