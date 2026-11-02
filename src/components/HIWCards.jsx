const HIWCards = ({ step, title, text }) => {
  return (
    <article className="flex h-full w-full flex-col gap-5 rounded-xl border border-[#27312C] bg-[#171E1B] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1B7A4B] sm:p-8">
      <div
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0E3B28] text-3xl font-black text-white"
      >
        {step}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-[#EAF0ED]">{title}</h3>
        <p className="text-md leading-relaxed text-[#9AA8A1]">{text}</p>
      </div>
    </article>
  );
};

export default HIWCards;