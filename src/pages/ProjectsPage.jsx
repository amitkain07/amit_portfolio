import { useEffect, useState } from "react";
import { CenterHeading } from "../components/ui/SectionHeading.jsx";
import { ArrowRightIcon, ArrowUpRightIcon, XIcon } from "../components/ui/Icons.jsx";
import { TagList } from "../components/ui/TagList.jsx";
import { projects } from "../data/portfolio.js";

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section
      className="relative min-h-screen scroll-mt-[var(--header)] border-b border-[var(--line-soft)] bg-[var(--section-bg)] py-[92px] min-[861px]:py-32 min-[1181px]:pt-[130px]"
      data-section="projects"
      id="projects"
    >
      <div className="mx-auto w-[calc(100%_-_34px)] max-w-[var(--wrap)] min-[861px]:w-[calc(100%_-_72px)] min-[1181px]:w-[calc(100%_-_220px)]">
        <CenterHeading kicker="Portfolio" title="Featured" accent="Projects">
          Selected product work showing how I turn complex requirements into
          clear, reliable frontend experiences.
        </CenterHeading>
        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-[26px] min-[861px]:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.title}
              onOpen={() => setActiveProject(project)}
              project={project}
            />
          ))}
        </div>
      </div>
      {activeProject ? (
        <CaseStudyDialog
          onClose={() => setActiveProject(null)}
          project={activeProject}
        />
      ) : null}
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const inProgress = project.status === "In Progress";

  return (
    <article
      className="reveal group relative min-h-[360px] overflow-hidden rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] p-[22px] transition duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgb(var(--accent-rgb)_/_0.025))] before:opacity-0 before:transition before:duration-300 hover:-translate-y-[7px] hover:border-[rgb(var(--accent-rgb)_/_0.5)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] hover:before:opacity-100 min-[521px]:min-h-[382px] min-[521px]:p-[30px]"
      style={{ "--delay": `${index * 55}ms` }}
    >
      <div className="relative z-10 mb-[31px] flex items-center justify-between">
        <span className="inline-flex min-h-[26px] items-center rounded-full border border-[var(--line-soft)] px-3 font-mono-code text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b959f]">
          <i className="mr-1.5 h-1 w-1 rounded-full bg-[var(--accent)]" />
          {project.num}
        </span>
        <span
          className={[
            "inline-flex min-h-[26px] items-center gap-2 rounded-full border border-[var(--line-soft)] px-[13px] font-mono-code text-[10px] font-bold uppercase tracking-[0.18em]",
            inProgress ? "text-[var(--amber)]" : "text-[var(--cyan)]",
          ].join(" ")}
        >
          <i
            className={[
              "h-1.5 w-1.5 rounded-full shadow-[0_0_13px_currentColor]",
              inProgress ? "bg-[var(--amber)]" : "bg-[var(--cyan)]",
            ].join(" ")}
          />
          {project.status}
        </span>
      </div>
      <p className="relative z-10 mb-3.5 mt-0 font-mono-code text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--accent)]">
        {project.eyebrow}
      </p>
      <h3 className="relative z-10 m-0 font-serif-display text-[31px] font-bold leading-[1.05] text-[var(--white)]">
        {project.title}
      </h3>
      <p className="relative z-10 mb-6 mt-5 text-[15px] font-semibold leading-[1.65] text-[#9aa3ad]">
        {project.text}
      </p>
      <div className="relative z-10 pb-12">
        <TagList tags={project.tags} />
      </div>
      <button
        className="absolute bottom-[29px] left-[22px] z-10 inline-flex items-center gap-2.5 font-mono-code text-[11px] font-bold uppercase tracking-[0.18em] text-[#9aa3ad] transition hover:text-[var(--accent)] min-[521px]:left-[30px] min-[521px]:tracking-[0.28em]"
        onClick={onOpen}
        type="button"
      >
        <i className="h-px w-6 bg-[#8b959f]" /> View Case Study <ArrowRightIcon className="h-3.5 w-3.5" />
      </button>
    </article>
  );
}

function CaseStudyDialog({ project, onClose }) {
  const inProgress = project.status === "In Progress";
  const titleId = `case-study-${project.num}-title`;
  const descriptionId = `case-study-${project.num}-summary`;
  const caseStudy = project.caseStudy;
  const previewUrl = project.livePreviewUrl || "#contact";
  const opensInNewTab = previewUrl.startsWith("http");
  const previewLabel = opensInNewTab ? "Live Preview" : "Discuss Project";
  const sections = [
    ["Context", caseStudy.context],
    ["Problem", caseStudy.problem],
    ["Solution", caseStudy.solution],
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 top-[var(--header)] z-40 overflow-y-auto bg-[rgba(4,9,7,0.74)] px-[17px] py-8 backdrop-blur-xl min-[861px]:py-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
      />
      <article
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="relative z-10 mx-auto flex max-h-[calc(100vh_-_var(--header)_-_92px)] w-full max-w-[820px] flex-col overflow-hidden rounded-lg border border-[rgb(var(--accent-rgb)_/_0.72)] bg-[linear-gradient(135deg,var(--panel-soft),rgb(var(--accent-rgb)_/_0.11))] shadow-[0_28px_100px_rgba(0,0,0,0.48),0_0_42px_rgb(var(--accent-rgb)_/_0.13)] min-[1181px]:w-[46vw] min-[1181px]:max-w-none min-[1440px]:w-[46vw] min-[1440px]:max-w-[940px]"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-5 border-b border-[var(--line-soft)] px-5 py-5 min-[721px]:items-center min-[721px]:px-11 min-[721px]:py-7">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3.5">
              <span className="inline-flex min-h-[29px] items-center rounded-full border border-[var(--line-soft)] px-3 font-mono-code text-[10px] font-bold uppercase tracking-[0.18em] text-[#9aa3ad]">
                <i className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {project.num}
              </span>
              <p className="m-0 font-mono-code text-[10px] font-extrabold uppercase tracking-[0.32em] text-[var(--accent)]">
                {project.eyebrow}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span
              className={[
                "hidden min-h-[29px] items-center gap-2 rounded-full border border-[var(--line-soft)] px-[15px] font-mono-code text-[10px] font-bold uppercase tracking-[0.18em] min-[521px]:inline-flex",
                inProgress ? "text-[var(--amber)]" : "text-[var(--cyan)]",
              ].join(" ")}
            >
              <i
                className={[
                  "h-1.5 w-1.5 rounded-full shadow-[0_0_13px_currentColor]",
                  inProgress ? "bg-[var(--amber)]" : "bg-[var(--cyan)]",
                ].join(" ")}
              />
              {project.status}
            </span>
            <button
              aria-label="Close case study"
              autoFocus
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.03)] text-[#9aa3ad] transition hover:border-[var(--accent)] hover:text-[var(--white)]"
              onClick={onClose}
              type="button"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="case-study-scroll overflow-y-auto px-5 py-8 min-[721px]:px-11 min-[721px]:py-10">
          <h3
            className="m-0 font-serif-display text-[clamp(1.7rem,3.4vw,2.3rem)] font-semibold leading-none text-[var(--white)]"
            id={titleId}
          >
            {project.title}
          </h3>
          <p
            className="mb-0 mt-5 max-w-[850px] text-[.88rem] font-normal leading-[1.75] text-[#a0a8b3]"
            id={descriptionId}
          >
            {caseStudy.summary}
          </p>
          <a
            className="mt-6 inline-flex min-h-[36px] items-center justify-center rounded-full border border-[rgb(var(--accent-rgb)_/_0.4)] bg-[rgb(var(--accent-rgb)_/_0.12)] px-5 font-mono-code text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
            href={previewUrl}
            onClick={opensInNewTab ? undefined : onClose}
            rel={opensInNewTab ? "noreferrer" : undefined}
            target={opensInNewTab ? "_blank" : undefined}
          >
            {previewLabel} <ArrowUpRightIcon className="ml-2 h-3.5 w-3.5" />
          </a>

          <div className="mt-9 border-t border-[var(--line-soft)] pt-8">
            <div className="space-y-8 border-l border-[rgb(var(--accent-rgb)_/_0.34)] pl-5 min-[721px]:pl-8">
              {sections.map(([label, text]) => (
                <CaseStudySection key={label} label={label}>
                  {text}
                </CaseStudySection>
              ))}

              <section>
                <CaseStudyLabel label="Impact" />
                <ul className="mt-4 grid gap-3.5 p-0">
                  {caseStudy.impact.map((item) => (
                    <li
                      className="flex items-start gap-4 text-[.92rem] font-normal leading-[1.75] text-[#a0a8b3]"
                      key={item}
                    >
                      <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <CaseStudyLabel label="Tech Stack" />
                <div className="mt-4">
                  <TagList tags={project.tags} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function CaseStudySection({ label, children }) {
  return (
    <section>
      <CaseStudyLabel label={label} />
      <p className="mb-0 mt-4 text-[.92rem] font-normal leading-[1.75] text-[#a0a8b3]">
        {children}
      </p>
    </section>
  );
}

function CaseStudyLabel({ label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-[rgb(var(--accent-rgb)_/_0.17)] text-[var(--accent)]">
        <i className="h-1.5 w-1.5 rotate-45 bg-current" />
      </span>
      <h4 className="m-0 font-mono-code text-[10px] font-extrabold uppercase tracking-[0.32em] text-[var(--accent)]">
        {label}
      </h4>
    </div>
  );
}
