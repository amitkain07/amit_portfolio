import { navItems, profile } from "../../data/portfolio.js";
import { ArrowUpRightIcon } from "../ui/Icons.jsx";
import { Brand } from "./Brand.jsx";

export function Header({ active }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[var(--header)] items-center border-b border-[var(--line-soft)] bg-[var(--header-bg)] px-[18px] backdrop-blur-2xl min-[861px]:px-7 min-[1181px]:px-16">
      <Brand />
      <nav
        aria-label="Main navigation"
        className="ml-auto hidden h-full items-center gap-8 min-[861px]:flex min-[1181px]:gap-10"
      >
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <a
              className={[
                "group relative inline-flex items-center font-mono-code text-[10px] font-semibold uppercase tracking-[0.24em] transition duration-200",
                isActive ? "text-[var(--white)] drop-shadow-[0_0_16px_rgba(255,255,255,0.72)]" : "text-[#9aa2ac]",
              ].join(" ")}
              href={item.href}
              key={item.href}
            >
              <span
                className={[
                  "absolute left-1/2 top-1/2 -z-10 h-7 w-16 -translate-x-1/2 -translate-y-1/2 bg-white/0 blur-xl transition",
                  isActive ? "bg-white/20" : "group-hover:bg-white/15",
                ].join(" ")}
              />
              {item.label}
              <span
                className={[
                  "absolute bottom-[15px] left-1/2 h-px -translate-x-1/2 bg-[var(--accent)] transition-all duration-200",
                  isActive ? "w-6" : "w-0 group-hover:w-6",
                ].join(" ")}
              />
            </a>
          );
        })}
      </nav>
      <div className="ml-5 flex items-center justify-end gap-3.5 min-[861px]:ml-10 min-[861px]:gap-8">
        {profile.linkedin ? <a
          className="hidden min-h-[29px] items-center justify-center rounded-[2px] bg-[var(--accent)] px-5 font-mono-code text-[10.5px] font-bold tracking-[0.16em] text-[var(--accent-contrast)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-soft)] min-[861px]:inline-flex"
          href={profile.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn <ArrowUpRightIcon className="ml-2 h-3 w-3" />
        </a> : null}
        <a
          aria-label="Download resume"
          className="grid h-7 w-7 place-items-center text-[var(--white)] transition duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)]"
          download="Amit_Kaintura_Resume.pdf"
          href={profile.resume}
        >
          <svg
            aria-hidden="true"
            className="h-[22px] w-[22px]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3" />
          </svg>
        </a>
      </div>
    </header>
  );
}

