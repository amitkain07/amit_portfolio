import { CenterHeading } from "../components/ui/SectionHeading.jsx";
import { skills } from "../data/portfolio.js";

export function SkillsPage() {
  return (
    <section
      className="relative min-h-screen scroll-mt-[var(--header)] border-b border-[var(--line-soft)] bg-[var(--bg)] py-[92px] min-[861px]:py-32 min-[1181px]:pt-[150px]"
      data-section="skills"
      id="skills"
    >
      <div className="mx-auto w-[calc(100%_-_34px)] max-w-[var(--wrap)] min-[861px]:w-[calc(100%_-_72px)] min-[1181px]:w-[calc(100%_-_220px)]">
        <CenterHeading kicker="Expertise" title="Technical" accent="Skills">
          Frontend tools I use professionally, plus the backend foundations I&apos;m
          developing to work effectively across product teams.
        </CenterHeading>
        <div className="grid grid-cols-1 gap-[26px] min-[861px]:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <SkillCard group={group} index={groupIndex} key={group.group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group, index }) {
  return (
    <article
      className="reveal min-h-[350px] rounded-[3px] border border-[var(--line-soft)] bg-[var(--panel-soft)] px-[22px] py-8 min-[521px]:px-[34px] min-[521px]:pt-10"
      style={{ "--delay": `${index * 70}ms` }}
    >
      <div className="mb-[42px] flex items-center gap-[26px]">
        <span
          className={[
            "h-3.5 w-3.5 rotate-45 border-2 border-[var(--accent)]",
            group.filled ? "bg-[var(--accent)]" : "",
          ].join(" ")}
        />
        <h3 className="m-0 font-mono-code text-[11px] font-bold uppercase tracking-[0.38em] text-[#8f9aa5]">
          {group.group}
        </h3>
      </div>
      <div className="grid gap-[22px]">
        {group.items.map(([name, value]) => (
          <div key={name}>
            <div className="mb-[9px] flex justify-between">
              <strong className="text-[13.6px] text-(--white)">{name}</strong>
              <span className="font-mono-code text-[11px] text-(--accent)">
                {value}%
              </span>
            </div>
            <i className="block h-[3px] bg-white/[0.08]">
              <span
                className="meter-fill block h-full origin-left bg-[var(--accent)]"
                style={{ width: `${value}%` }}
              />
            </i>
          </div>
        ))}
      </div>
    </article>
  );
}
