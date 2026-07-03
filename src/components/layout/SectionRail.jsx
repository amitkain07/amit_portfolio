export function SectionRail({ current }) {
  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed left-[34px] top-[43vh] z-40 hidden justify-items-center gap-3.5 min-[861px]:grid"
    >
      <span className="writing-vertical font-mono-code text-[10px] tracking-[0.18em] text-[var(--accent)]">
        {current.number}
      </span>
      <span className="h-[78px] w-px bg-[var(--accent)]" />
      <span className="writing-vertical font-mono-code text-[10px] uppercase tracking-[0.42em] text-[rgba(142,152,163,0.48)]">
        {current.label}
      </span>
    </aside>
  );
}

