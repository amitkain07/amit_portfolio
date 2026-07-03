import { CenterHeading } from "../components/ui/SectionHeading.jsx";
import { learning } from "../data/portfolio.js";

export function LearningPage() {
  return (
    <section
      className="relative min-h-screen scroll-mt-[var(--header)] border-b border-[var(--line-soft)] bg-[var(--section-bg)] py-[92px] min-[861px]:py-32"
      data-section="learning"
      id="learning"
    >
      <div className="mx-auto w-[calc(100%_-_34px)] max-w-[var(--wrap)] min-[861px]:w-[calc(100%_-_72px)] min-[1181px]:w-[calc(100%_-_220px)]">
        <CenterHeading kicker="Growth" title="Currently" accent="Learning">
          Topics I&apos;m actively exploring to deepen my frontend expertise and
          grow practical backend capability.
        </CenterHeading>
        <div className="grid grid-cols-1 gap-6 min-[861px]:grid-cols-2 min-[1181px]:grid-cols-3">
          {learning.map((item, index) => (
            <article
              className="reveal min-h-[265px] rounded-[3px] border border-[var(--line-soft)] bg-[var(--panel-soft)] px-[22px] py-[34px] transition duration-200 hover:-translate-y-1.5 hover:border-[rgb(var(--accent-rgb)_/_0.52)] min-[521px]:px-[34px] min-[521px]:pt-[38px]"
              key={item.title}
              style={{ "--delay": `${index * 60}ms` }}
            >
              <div className="mb-[34px] flex items-center justify-between">
                <LearningMark type={item.mark} />
                <b className="font-mono-code text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
                  In Progress
                </b>
              </div>
              <h3 className="m-0 font-serif-display text-[31px] font-bold leading-[1.05] text-[var(--white)]">
                {item.title}
              </h3>
              <p className="mb-6 mt-5 text-[15px] font-semibold leading-[1.65] text-[#9aa3ad]">
                {item.text}
              </p>
              <small className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-[#67727c]">
                {item.type}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningMark({ type }) {
  if (type === "triangle") {
    return <span className="h-0 w-0 border-b-[24px] border-l-[12px] border-r-[12px] border-b-[var(--white)] border-l-transparent border-r-transparent drop-shadow-[0_0_14px_rgb(var(--accent-rgb)_/_0.55)]" />;
  }

  if (type === "leaf") {
    return (
      <span className="relative h-7 w-7">
        <i className="absolute left-1 top-2 h-4 w-6 rounded-[100%_0] border-2 border-[var(--accent)] bg-[rgb(var(--accent-rgb)_/_0.28)] -rotate-12" />
        <i className="absolute left-0 top-1 h-4 w-5 rounded-[100%_0] border-2 border-[#a7b2bd] rotate-45" />
      </span>
    );
  }

  if (type === "puzzle") {
    return (
      <span className="grid h-7 w-7 grid-cols-2 grid-rows-2 gap-[2px] rotate-45">
        <i className="rounded-sm bg-[#c3e86d]" />
        <i className="rounded-sm bg-[var(--accent)]" />
        <i className="rounded-sm bg-[var(--white)]" />
        <i className="rounded-sm bg-[#a9d2ff]" />
      </span>
    );
  }

  if (type === "circle") {
    return (
      <span className="relative h-7 w-7">
        <i className="absolute inset-1 rounded-full border-4 border-[#7fd0ff] border-r-transparent" />
        <i className="absolute left-0 top-3 h-3 w-4 rounded-full bg-[#bfeaff]" />
      </span>
    );
  }

  if (type === "cloud") {
    return (
      <span className="relative h-7 w-8">
        <i className="absolute bottom-1 left-0 h-3.5 w-8 rounded-full bg-[linear-gradient(90deg,#f5f3ff,var(--accent))] shadow-[0_0_18px_rgb(var(--accent-rgb)_/_0.35)]" />
        <i className="absolute bottom-2 left-2 h-4 w-4 rounded-full bg-[#f5f3ff]" />
      </span>
    );
  }

  return <span className="h-4 w-4 rotate-45 bg-[var(--white)] shadow-[0_0_14px_rgb(var(--accent-rgb)_/_0.45)]" />;
}

