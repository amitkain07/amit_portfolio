import { LeftHeading } from "../components/ui/SectionHeading.jsx";
import { TagList } from "../components/ui/TagList.jsx";
import { education, workHistory } from "../data/portfolio.js";

export function ExperiencePage() {
  return (
    <section
      className="relative min-h-screen scroll-mt-[var(--header)] border-b border-[var(--line-soft)] bg-[var(--bg)] py-[92px] min-[861px]:py-32"
      data-section="experience"
      id="experience"
    >
      <div className="mx-auto w-[calc(100%_-_34px)] max-w-[var(--wrap)] min-[861px]:w-[calc(100%_-_72px)] min-[1181px]:w-[calc(100%_-_220px)]">
        <LeftHeading kicker="Career" title="Experience &" accent="Background" />
        <div className="grid grid-cols-1 gap-[62px] min-[1181px]:grid-cols-[minmax(0,1.5fr)_minmax(330px,1fr)] min-[1181px]:gap-[68px]">
          <div>
            <ColumnTitle>Work History</ColumnTitle>
            {workHistory.map((job, index) => (
              <article
                className="reveal mb-[25px] border border-[var(--line-soft)] border-l-2 border-l-[var(--accent)] bg-[var(--panel-soft)] px-[22px] py-8 min-[521px]:px-[34px] min-[521px]:py-9"
                key={job.role + job.period}
                style={{ "--delay": `${index * 80}ms` }}
              >
                <div className="mb-8 grid gap-[22px] min-[861px]:flex min-[861px]:justify-between">
                  <div>
                    <h4 className="mb-3 mt-0 font-serif-display text-[27px] leading-[1.1] text-[var(--white)]">
                      {job.role}
                    </h4>
                    <p className="m-0 font-mono-code text-[12px] font-bold tracking-[0.16em] text-[var(--accent)]">
                      {job.company}
                    </p>
                  </div>
                  <div className="grid content-start justify-items-start gap-2.5 min-w-[150px] min-[861px]:justify-items-end">
                    <span className="font-mono-code text-[11px] font-bold tracking-[0.12em] text-[#a3abb3]">
                      {job.period}
                    </span>
                    <b className="border border-[var(--line-soft)] px-2.5 py-1.5 font-mono-code text-[10px] font-medium uppercase tracking-[0.12em] text-[#6f7983]">
                      {job.type}
                    </b>
                  </div>
                </div>
                <ul className="mb-7 grid list-none gap-[18px] p-0">
                  {job.bullets.map((bullet) => (
                    <li
                      className="relative pl-7 text-[15px] font-semibold leading-[1.72] text-[#9da6ad] before:absolute before:left-0 before:top-[15px] before:h-px before:w-3 before:bg-[var(--accent)]"
                      key={bullet}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <TagList square tags={job.tags} />
              </article>
            ))}
          </div>
          <div>
            <ColumnTitle>Education</ColumnTitle>
            <div className="mb-[46px] grid gap-4">
              {education.map((item) => (
                <article className="reveal border border-[var(--line-soft)] bg-[var(--panel-soft)] px-[26px] py-[30px]" key={item.title}>
                  <h4 className="mb-3 mt-0 font-serif-display text-[22px] leading-[1.1] text-[var(--white)]">
                    {item.title}
                  </h4>
                  <strong className="m-0 font-mono-code text-[12px] font-bold tracking-[0.16em] text-[var(--accent)]">
                    {item.school}
                  </strong>
                  <span className="mt-[11px] block font-mono-code text-[11px] tracking-[0.1em] text-[#88939c]">
                    {item.period}
                  </span>
                  <em className="mt-[11px] block text-[14px] font-semibold italic text-[#88939c]">
                    {item.detail}
                  </em>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColumnTitle({ children, className = "" }) {
  return (
    <h3 className={`mb-9 font-mono-code text-[11px] font-bold uppercase tracking-[0.38em] text-[var(--accent)] ${className}`}>
      <span className="mr-3 inline-block h-1.5 w-1.5 rotate-45 border border-[var(--accent)]" />
      {children}
    </h3>
  );
}

