import { SectionKicker } from "./SectionKicker.jsx";

export function CenterHeading({ kicker, title, accent, children }) {
  return (
    <div className="reveal mx-auto mb-[88px] w-[min(660px,100%)] text-center">
      <SectionKicker centered className="mb-[58px]">
        {kicker}
      </SectionKicker>
      <h2 className="m-0 font-serif-display text-[clamp(48px,16vw,72px)] font-semibold leading-[0.98] text-[var(--white)] tracking-[0] md:text-[clamp(58px,5.4vw,82px)]">
        {title} <span className="text-[var(--accent)]">{accent}</span>
      </h2>
      {children ? (
        <p className="mx-auto mt-9 w-[min(450px,100%)] text-[16px] font-semibold leading-[1.75] text-[#9aa3ad]">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export function LeftHeading({ kicker, title, accent }) {
  return (
    <div className="reveal mb-[82px]">
      <SectionKicker className="mb-[58px]">{kicker}</SectionKicker>
      <h2 className="m-0 font-serif-display text-[clamp(48px,16vw,72px)] font-semibold leading-[0.98] text-[var(--white)] tracking-[0] md:text-[clamp(58px,5.4vw,82px)]">
        {title} <span className="text-[var(--accent)]">{accent}</span>
      </h2>
    </div>
  );
}

