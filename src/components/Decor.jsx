export const Ball = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle
      cx="50"
      cy="50"
      r="47"
      fill="#fff"
      stroke="#1D2321"
      strokeWidth="3"
    />
    <polygon points="50,34 64,44 59,61 41,61 36,44" fill="#1D2321" />
    <g stroke="#1D2321" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M50 34V5M64 44l28-9M59 61l17 24M41 61L24 85M36 44L8 35" />
    </g>
    <g fill="#1D2321">
      <path d="M50 3l12 7-6 9H44l-6-9z" />
      <path d="M93 36l-2 14-11 2-3-11z" />
      <path d="M7 36l2 14 11 2 3-11z" />
    </g>
  </svg>
);

export const Pitch = () => (
  <svg
    viewBox="0 0 1200 420"
    preserveAspectRatio="xMidYMax slice"
    className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full opacity-[0.14]"
    aria-hidden="true"
  >
    <g fill="none" stroke="#fff" strokeWidth="3">
      <rect x="40" y="60" width="1120" height="400" />
      <path d="M600 60v400" />
      <circle cx="600" cy="260" r="90" />
      <circle cx="600" cy="260" r="5" fill="#fff" />
      <rect x="40" y="170" width="170" height="180" />
      <rect x="990" y="170" width="170" height="180" />
      <rect x="40" y="215" width="70" height="90" />
      <rect x="1090" y="215" width="70" height="90" />
    </g>
  </svg>
);

export const Rings = ({ className = "" }) => (
  <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
    <g fill="none" stroke="#fff" strokeWidth="2">
      <circle cx="300" cy="300" r="70" />
      <circle cx="300" cy="300" r="150" />
      <circle cx="300" cy="300" r="230" />
      <circle cx="300" cy="300" r="290" />
      <path d="M0 300h600" />
    </g>
    <circle cx="300" cy="300" r="6" fill="#fff" />
  </svg>
);

export const DotGrid = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#10265418_1px,transparent_1px)] bg-[size:26px_26px]"
  />
);
