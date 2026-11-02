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