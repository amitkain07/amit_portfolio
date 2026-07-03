import { profile, tickerItems } from "../../data/portfolio.js";
import { Brand } from "./Brand.jsx";

export function Footer() {
  return (
    <footer className="grid w-full grid-cols-1 items-center gap-[50px] border-t border-[var(--line-soft)] bg-[var(--section-bg)] px-9 py-[54px] min-[1181px]:grid-cols-[260px_1fr_150px] min-[1181px]:px-[max(66px,calc((100vw_-_1250px)_/_2))]">
      <div>
        <Brand footer />
        <strong className="mb-3 block text-[16px]">{profile.firstName} {profile.lastName}</strong>
        <p className="m-0 font-mono-code text-[10px] tracking-[0.14em] text-[#78838e]">
          Frontend Developer - {profile.company}
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-x-[45px] gap-y-4 min-[1181px]:justify-center">
        {tickerItems.map((item) => (
          <span
            className="relative whitespace-nowrap font-mono-code text-[10px] font-bold uppercase tracking-[0.24em] text-[#5f6872] after:absolute after:-right-[34px] after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-[var(--accent)]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex justify-start gap-3.5 min-[1181px]:justify-end">
        {profile.linkedin ? <FooterIcon href={profile.linkedin}>LI</FooterIcon> : null}
        {profile.github ? <FooterIcon href={profile.github}>GH</FooterIcon> : null}
        <FooterIcon href={`mailto:${profile.email}`}>
          <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16v12H4z" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </FooterIcon>
      </div>
      <div className="grid gap-[18px] border-t border-[var(--line-soft)] pt-[34px] font-mono-code text-[10px] tracking-[0.13em] text-[#66717b] min-[861px]:col-span-full min-[861px]:flex min-[861px]:justify-between">
        <span>{String.fromCharCode(169)} 2026 {profile.firstName} {profile.lastName}. All rights reserved.</span>
        <span>Built with React.js, Vite & Tailwind CSS</span>
      </div>
    </footer>
  );
}

function FooterIcon({ href, children }) {
  return (
    <a
      className="grid h-[38px] w-[38px] place-items-center border border-[var(--line-soft)] font-mono-code text-[10px] text-[#8e99a2] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      href={href}
      rel="noreferrer"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

