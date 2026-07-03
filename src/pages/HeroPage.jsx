import { DecorativeGrid } from "../components/layout/DecorativeGrid.jsx";
import { HeroParticleAnimation } from "../components/layout/HeroParticleAnimation.jsx";
import { Ticker } from "../components/layout/Ticker.jsx";
import { ArrowRightIcon } from "../components/ui/Icons.jsx";
import { heroStats, profile } from "../data/portfolio.js";
import { useTheme } from "../context/ThemeContext.jsx";

const actionClass =
  "inline-flex min-h-[45px] min-w-[146px] items-center justify-center border border-transparent px-[26px] font-mono-code text-[12px] font-bold uppercase tracking-[0.22em] transition duration-200 hover:-translate-y-0.5";

export function HeroPage({ repeatedTicker }) {
  const { themeId, themes, setThemeId } = useTheme();

  return (
    <section
      className="relative flex min-h-screen flex-col items-start overflow-hidden border-b border-[var(--line-soft)] bg-[var(--bg)] px-0 pb-[92px] pt-32 min-[861px]:items-center min-[861px]:pb-[128px] min-[861px]:pt-[var(--header)]"
      data-section="hero"
      id="hero"
    >
      <DecorativeGrid />
      <div className="hero-wash pointer-events-none absolute inset-0 opacity-70" />
      <HeroParticleAnimation themeId={themeId} />
      <div className="absolute right-[66px] top-[135px] z-10 hidden items-center gap-2.5 min-[861px]:flex">
        {themes.map((theme) => {
          const isActive = theme.id === themeId;

          return (
            <button
              aria-label={`Use ${theme.label} theme`}
              className={[
                "rounded-full transition duration-200 hover:scale-110",
                isActive ? "h-[22px] w-[22px] ring-[3px] ring-[var(--white)]" : "h-[13px] w-[13px]",
              ].join(" ")}
              key={theme.id}
              onClick={() => setThemeId(theme.id)}
              style={{
                backgroundColor: theme.color,
                boxShadow: isActive ? `0 0 0 3px var(--white), 0 0 25px ${theme.color}` : undefined,
              }}
              type="button"
            />
          );
        })}
      </div>
      <div className="relative z-10 mx-auto w-[calc(100%_-_34px)] max-w-[680px] min-[861px]:ml-[66px] min-[861px]:mr-0 min-[861px]:mt-[68px] min-[861px]:w-[calc(100vw_-_150px)] min-[861px]:max-w-[720px]">
        <p className="reveal mb-[42px] flex flex-wrap items-center gap-3 font-mono-code text-[10px] font-bold uppercase leading-[1.6] tracking-[0.23em] text-[#9aa2ac] min-[861px]:text-[11px]">
          <span className="h-2 w-2 rounded-full bg-[#33e589] shadow-[0_0_16px_rgba(51,229,137,0.8)]" />
          Open to frontend opportunities
          <i className="h-px w-[22px] bg-[var(--line)]" />
          <b className="text-[var(--accent)]">2026</b>
        </p>
        <h1 className="reveal m-0 font-serif-display font-semibold leading-[0.84] text-[var(--white)] tracking-[0]">
          <span className="block text-[clamp(62px,19vw,86px)] min-[521px]:text-[clamp(76px,18vw,120px)] min-[861px]:text-[clamp(86px,9.4vw,162px)]">
            {profile.firstName}
          </span>
          <strong className="text-stroke-accent mt-2 block text-[clamp(68px,20vw,92px)] font-semibold text-transparent min-[521px]:text-[clamp(82px,19vw,124px)] min-[861px]:text-[clamp(92px,9.6vw,170px)]">
            {profile.lastName}
          </strong>
        </h1>
        <p className="reveal relative my-7 w-auto font-mono-code text-[12px] font-extrabold uppercase leading-[1.6] tracking-[0.32em] text-[var(--accent)] min-[861px]:ml-[84px] min-[861px]:mt-[46px] min-[861px]:mb-7 min-[861px]:w-max min-[861px]:text-[16px] min-[861px]:before:absolute min-[861px]:before:right-[calc(100%_+_28px)] min-[861px]:before:top-1/2 min-[861px]:before:h-px min-[861px]:before:w-[58px] min-[861px]:before:bg-[var(--accent)]">
          [ {profile.role} ]
        </p>
        <p className="reveal mb-[34px] font-mono-code text-[14px] font-bold tracking-[0.08em] text-[#9aa2ac] min-[861px]:ml-[78px]">
          @ {profile.company}
        </p>
        <p className="reveal mb-14 max-w-[560px] text-[15px] font-semibold leading-[1.75] text-[#969fa9]">
          Building responsive, production-ready web products with React,
          Next.js, TypeScript, thoughtful state management, and dependable API
          integrations.
        </p>
        <div className="reveal flex flex-wrap gap-4">
          <a className={`${actionClass} bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--accent-soft)] max-[520px]:w-full`} href="#projects">
            View Work <ArrowRightIcon className="ml-3 h-[18px] w-[18px]" />
          </a>
          <a className={`${actionClass} border-[var(--line-soft)] bg-[var(--ghost-bg)] text-[#8f99a3] hover:border-[var(--accent)] hover:text-[var(--white)] max-[520px]:w-full`} href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="reveal relative z-10 mx-auto mt-12 grid w-[calc(100%_-_34px)] max-w-[420px] grid-cols-3 border border-[var(--line-soft)] bg-[var(--stats-bg)] backdrop-blur min-[861px]:absolute min-[861px]:bottom-[72px] min-[861px]:left-auto min-[861px]:right-[58px] min-[861px]:mt-0 min-[861px]:w-[330px] min-[1181px]:left-1/2 min-[1181px]:right-auto">
        {heroStats.map((stat, index) => (
          <div
            className="grid place-items-center gap-[3px] border-r border-[var(--line-soft)] px-2 py-3.5 text-center last:border-r-0 min-[521px]:px-[18px]"
            key={stat.label}
          >
            <strong className="font-serif-display text-[28px] leading-none text-[var(--accent)]">
              {stat.value === "infinity" ? <>{String.fromCharCode(8734)}</> : stat.value}
            </strong>
            <span className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-[var(--muted-2)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-24 right-[74px] z-10 hidden justify-items-center gap-[18px] min-[861px]:grid">
        <span className="h-[58px] w-px bg-[var(--accent)]" />
        <b className="writing-vertical font-mono-code text-[10px] font-medium uppercase tracking-[0.32em] text-[#7a838c]">
          Scroll
        </b>
      </div>
      <Ticker items={repeatedTicker} />
    </section>
  );
}

