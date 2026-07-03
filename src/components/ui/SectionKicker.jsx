export function SectionKicker({ children, centered = false, className = "" }) {
  return (
    <p
      className={[
        "w-max font-mono-code text-[12px] font-bold uppercase tracking-[0.34em] text-[var(--accent)]",
        centered ? "mx-auto text-center" : "",
        className,
      ].join(" ")}
    >
      {children}
      <span
        className={[
          "mt-[18px] block h-px w-[46px] bg-[var(--accent)]",
          centered ? "mx-auto" : "",
        ].join(" ")}
      />
    </p>
  );
}

