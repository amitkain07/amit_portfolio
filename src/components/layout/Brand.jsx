import { profile } from "../../data/portfolio.js";

export function Brand({ footer = false }) {
  return (
    <a
      aria-label={`${profile.firstName} ${profile.lastName} home`}
      className={[
        "inline-flex w-max items-baseline font-serif-display text-[28px] font-extrabold leading-none text-[var(--white)]",
        footer ? "mb-3" : "",
      ].join(" ")}
      href="#hero"
    >
      <span className="text-[var(--accent)]">{profile.initials[0]}</span>
      {profile.initials[1]}
    </a>
  );
}

