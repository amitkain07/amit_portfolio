import { useEffect, useState } from "react";
import { sectionMeta } from "../data/portfolio.js";

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.getAttribute("data-section"));
        }
      },
      { threshold: [0.22, 0.36, 0.52], rootMargin: "-72px 0px -35% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return {
    active,
    current: sectionMeta[active] || sectionMeta.hero,
  };
}
