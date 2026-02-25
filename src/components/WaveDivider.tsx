interface WaveDividerProps {
  /** The fill color class of the wave (should match the NEXT section's background) */
  fillClass?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ fillClass = "fill-card", flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] -mb-px ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full h-[60px] sm:h-[80px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
          className={fillClass}
        />
      </svg>
    </div>
  );
}
