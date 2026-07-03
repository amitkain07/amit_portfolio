export function Ticker({ items }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-10 h-9 overflow-hidden border-t border-[var(--line-soft)] bg-[var(--ticker-bg)] min-[861px]:h-[39px]"
    >
      <div className="ticker-track flex h-full w-max items-center gap-16">
        {items.map((item, index) => (
          <span
            className="relative whitespace-nowrap font-mono-code text-[10px] font-bold uppercase tracking-[0.24em] text-[#5f6872] after:absolute after:-right-[34px] after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-[var(--accent)]"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

