import { SectionKicker } from "../components/ui/SectionKicker.jsx";
import { profile, skillTags, stats } from "../data/portfolio.js";

export function AboutPage() {
  return (
    <section
      className="relative min-h-screen scroll-mt-[var(--header)] border-b border-[var(--line-soft)] bg-[var(--section-bg)] py-[92px] min-[861px]:py-32 min-[1181px]:pt-[156px]"
      data-section="about"
      id="about"
    >
      <div className="mx-auto grid w-[calc(100%_-_34px)] max-w-[var(--wrap)] items-start gap-[62px] min-[861px]:w-[calc(100%_-_72px)] min-[1181px]:w-[calc(100%_-_220px)] min-[1181px]:grid-cols-[360px_1fr] min-[1181px]:gap-[110px]">
        <div className="reveal">
          <SectionKicker className="mb-[42px] min-[861px]:mb-[74px]">
            About Me
          </SectionKicker>
          <h2 className="m-0 font-serif-display text-[clamp(48px,16vw,72px)] font-semibold leading-[0.96] text-[var(--white)] tracking-[0] min-[861px]:text-[clamp(70px,6vw,102px)]">
            Frontend
            <br />
            <span className="text-[var(--accent)]">Developer</span>
          </h2>
          <div className="mt-[60px] grid h-[168px] w-[168px] place-items-center border border-[var(--accent)] bg-white/[0.02] font-serif-display text-[43px] font-extrabold text-[var(--white)] shadow-[inset_0_0_0_1px_rgb(var(--accent-rgb)_/_0.18)]">
            <span>
              <span className="text-[var(--accent)]">{profile.initials[0]}</span>
              {profile.initials[1]}
            </span>
          </div>
        </div>
        <div>
          <div className="reveal max-w-[780px]">
            <p className="mb-7 mt-0 text-[15.5px] font-semibold leading-[1.82] text-[#9aa3ad]">
              I&apos;m a <strong className="text-[var(--white)]">Frontend Developer</strong> at{" "}
              <strong className="text-[var(--white)]">{profile.company}</strong>, with{" "}
              <strong className="text-[var(--white)]">one year of professional experience</strong> building
              scalable, user-focused web applications with React, Next.js,
              TypeScript, and Tailwind CSS.
            </p>
            <p className="mb-7 mt-0 text-[15.5px] font-semibold leading-[1.82] text-[#9aa3ad]">
              I build dynamic interfaces, own frontend modules, integrate REST
              APIs and third-party services, and manage complex state with{" "}
              <strong className="text-[var(--white)]">Redux Toolkit</strong>,{" "}
              <strong className="text-[var(--white)]">Zustand</strong>, and{" "}
              <strong className="text-[var(--white)]">Context API</strong>. My recent work includes survey,
              campaign, analytics, and CA practice management products.
            </p>
            <p className="m-0 text-[15.5px] font-semibold leading-[1.82] text-[#9aa3ad]">
              I also understand backend foundations in NestJS, Mongoose,
              Prisma, and PostgreSQL. I can build basic CRUD APIs and JWT
              authentication with access and refresh tokens handled through
              secure cookies, which helps me collaborate smoothly across the stack.
            </p>
          </div>
          <div className="reveal mt-[50px] grid grid-cols-1 border border-[var(--line-soft)] min-[521px]:grid-cols-2 min-[861px]:grid-cols-4">
            {stats.map((stat, index) => {
              const borders = [
                index !== stats.length - 1 ? "max-[520px]:border-b" : "",
                index % 2 === 0 ? "min-[521px]:border-r" : "",
                index < 2 ? "min-[521px]:border-b" : "",
                index !== stats.length - 1 ? "min-[861px]:border-r" : "",
                "min-[861px]:border-b-0",
              ].join(" ");

              return (
              <div
                className={`grid min-h-[124px] place-items-center content-center gap-2.5 border-[var(--line-soft)] p-3.5 text-center ${borders}`}
                key={stat.label}
              >
                <strong className="font-serif-display text-[40px] leading-none text-[var(--accent)]">
                  {stat.value}
                </strong>
                <span className="max-w-[118px] font-mono-code text-[10px] uppercase leading-[1.55] tracking-[0.18em] text-[var(--muted-2)]">
                  {stat.label}
                </span>
              </div>
              );
            })}
          </div>
          <div className="reveal mt-[42px] flex flex-wrap gap-2.5">
            {skillTags.map((tag) => (
              <span
                className="border border-[var(--line-soft)] bg-[var(--ghost-bg)] px-3.5 py-2.5 font-mono-code text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#8a949e]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
