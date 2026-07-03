import { Footer } from "../components/layout/Footer.jsx";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons.jsx";
import { SectionKicker } from "../components/ui/SectionKicker.jsx";
import { profile } from "../data/portfolio.js";

const contactCardClass =
  "relative min-h-[94px] border border-[var(--line-soft)] bg-[var(--panel-soft)] px-7 py-[25px] transition duration-200 hover:translate-x-[7px] hover:border-[var(--accent)]";

const inputClass =
  "h-[52px] w-full border border-[var(--line-soft)] bg-[var(--field-bg)] px-[17px] font-sans-ui text-[15px] normal-case tracking-[0] text-[var(--white)] outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgb(var(--accent-rgb)_/_0.08)]";

const textareaClass =
  "min-h-[142px] w-full resize-y border border-[var(--line-soft)] bg-[var(--field-bg)] px-[17px] pt-[18px] font-sans-ui text-[15px] normal-case tracking-[0] text-[var(--white)] outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgb(var(--accent-rgb)_/_0.08)]";

export function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="relative min-h-screen scroll-mt-[var(--header)] border-b border-[var(--line-soft)] bg-[var(--bg)] pt-[92px] min-[861px]:pt-[142px]"
      data-section="contact"
      id="contact"
    >
      <div className="mx-auto grid w-[calc(100%_-_34px)] max-w-[var(--wrap)] grid-cols-1 gap-[62px] pb-[132px] min-[861px]:w-[calc(100%_-_72px)] min-[1181px]:w-[calc(100%_-_220px)] min-[1181px]:grid-cols-[minmax(330px,0.92fr)_minmax(420px,1.28fr)] min-[1181px]:gap-[68px]">
        <div className="reveal">
          <SectionKicker className="mb-[60px]">Contact</SectionKicker>
          <h2 className="m-0 font-serif-display text-[clamp(48px,16vw,72px)] font-semibold leading-[0.98] text-[var(--white)] tracking-[0] md:text-[clamp(58px,5.4vw,82px)]">
            Let&apos;s <span className="text-[var(--accent)]">Connect</span>
          </h2>
          <p className="mb-[68px] mt-10 max-w-[560px] text-[16px] font-semibold leading-[1.75] text-[#9da8b4]">
            I&apos;m open to frontend opportunities where I can build thoughtful,
            reliable product experiences. If you have a role, project, or an
            interesting problem in mind, my inbox is open.
          </p>
          <div className="grid gap-4">
            <a className={contactCardClass} href={`mailto:${profile.email}`}>
              <strong className="mb-[9px] block text-[18px] font-extrabold">Email</strong>
              <span className="block font-mono-code text-[11px] tracking-[0.08em] text-[#86919c]">
                Say Hello
              </span>
              <MailIcon />
            </a>
            {profile.linkedin ? <a className={contactCardClass} href={profile.linkedin} rel="noreferrer" target="_blank">
              <strong className="mb-[9px] block text-[18px] font-extrabold">LinkedIn</strong>
              <span className="block font-mono-code text-[11px] tracking-[0.08em] text-[#86919c]">
                Connect with me
              </span>
              <b className="absolute right-7 top-[34px] text-[var(--accent)]">
                <ArrowUpRightIcon />
              </b>
            </a> : null}
            {profile.github ? <a className={contactCardClass} href={profile.github} rel="noreferrer" target="_blank">
              <strong className="mb-[9px] block text-[18px] font-extrabold">GitHub</strong>
              <span className="block font-mono-code text-[11px] tracking-[0.08em] text-[#86919c]">
                Check my work
              </span>
              <b className="absolute right-7 top-[34px] text-[var(--accent)]">
                <ArrowUpRightIcon />
              </b>
            </a> : null}
            <div className={contactCardClass}>
              <strong className="mb-[9px] block text-[18px] font-extrabold">Location</strong>
              <span className="block font-mono-code text-[11px] tracking-[0.08em] text-[#86919c]">
                {profile.location}
              </span>
              <b className="absolute right-7 top-[34px] text-[var(--accent)]" aria-hidden="true">
                IN
              </b>
            </div>
            <div className="flex min-h-[60px] items-center gap-3.5 border border-[var(--line-soft)] bg-[rgb(var(--accent-rgb)_/_0.035)] px-7 font-mono-code text-[11px] font-bold uppercase tracking-[0.2em] text-[#2bff9b]">
              <span className="h-2 w-2 rounded-full bg-[#33e589] shadow-[0_0_16px_rgba(51,229,137,0.8)]" />
              Currently open to new opportunities
            </div>
          </div>
        </div>
        <form className="reveal grid content-start gap-7 border border-[var(--line-soft)] bg-[var(--panel-soft)] px-[22px] py-[30px] min-[861px]:px-[42px] min-[861px]:py-11" onSubmit={handleSubmit}>
          <ContactField label="Name">
            <input autoComplete="name" className={inputClass} name="name" placeholder="Your name" required type="text" />
          </ContactField>
          <ContactField label="Email">
            <input autoComplete="email" className={inputClass} name="email" placeholder="your@email.com" required type="email" />
          </ContactField>
          <ContactField label="Message">
            <textarea className={textareaClass} name="message" placeholder="Tell me about the role / project..." required />
          </ContactField>
          <button
            className="mt-[-2px] inline-flex min-h-[45px] w-max min-w-[194px] cursor-pointer items-center justify-center border-0 bg-[var(--accent)] px-[26px] font-mono-code text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--accent-contrast)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-soft)]"
            type="submit"
          >
            Send Message <ArrowRightIcon className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

function ContactField({ label, children }) {
  return (
    <label className="grid gap-3 font-mono-code text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
      {label}
      {children}
    </label>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="absolute right-7 top-[34px] h-4 w-4 text-[var(--accent)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

