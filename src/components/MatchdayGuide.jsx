import { Ball, Rings } from "./Decor";

const guide = [
  {
    icon: "⚽",
    title: "Pick your fixtures",
    text: "Start with the games you’re most excited to watch today.",
  },
  {
    icon: "▤",
    title: "Check each selection",
    text: "See the market and pick together, all in one easy-to-scan slip.",
  },
  {
    icon: "✦",
    title: "Enjoy the game",
    text: "Use the tips your way, keep it fun and let the football do the talking.",
  },
];

export default function MatchdayGuide() {
  return (
    <section
      id="matchday"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#e8a24a] via-[#dc9134] to-[#d58a32] px-5 py-16 text-blue-950 sm:px-8 md:py-20"
    >
      <Rings className="pointer-events-none absolute -left-36 -top-40 z-0 w-[34rem] opacity-20" />
      <Ball className="absolute bottom-6 left-[5%] z-10 hidden w-16 animate-bounce opacity-90 [animation-duration:4s] md:block" />
      <div className="relative z-20 mx-auto max-w-6xl">
        <span className="text-xs font-extrabold uppercase tracking-[.18em] text-orange-50">
          Your matchday, your way
        </span>
        <div className="mt-2 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              A little more fun in every fixture.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-amber-950">
              Make a shortlist, follow the picks and enjoy the games. Daily2Odds
              brings the day’s football selections together so you can focus on
              the matchday.
            </p>
          </div>
          <a
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-blue-950 px-5 py-3 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-800 md:self-auto"
            href="#sample"
          >
            See the sample slip <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {guide.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/50 bg-[#fff8ee]/95 p-5 shadow-lg shadow-orange-950/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f2d49e] text-xl">
                {item.icon}
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
