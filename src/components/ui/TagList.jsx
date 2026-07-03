export function TagList({ tags, square = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          className={[
            "inline-flex min-h-[26px] items-center border px-3 font-mono-code text-[10px] font-bold uppercase tracking-[0.18em]",
            square
              ? "rounded-none border-[rgb(var(--accent-rgb)_/_0.24)] bg-[rgb(var(--accent-rgb)_/_0.08)] text-[var(--accent)]"
              : "rounded-full border-[var(--line-soft)] text-[#8b959f]",
          ].join(" ")}
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

