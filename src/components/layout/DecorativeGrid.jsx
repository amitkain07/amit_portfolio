import { useEffect, useRef } from "react";

export function DecorativeGrid() {
  const gridRef = useRef(null);

  const seededRandom = (seed) => {
    const value = Math.sin(seed) * 10000;
    return value - Math.floor(value);
  };

  useEffect(() => {
    const node = gridRef.current;
    if (!node) {
      return;
    }

    let frameId;
    const updatePosition = (event) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const mx = Math.max(-1, Math.min(1, (x - 0.5) * 2));
      const my = Math.max(-1, Math.min(1, (y - 0.5) * 2));

      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        node.style.setProperty("--mx", mx.toFixed(3));
        node.style.setProperty("--my", my.toFixed(3));
      });
    };

    const resetPosition = () => {
      node.style.setProperty("--mx", "0");
      node.style.setProperty("--my", "0");
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mouseleave", resetPosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseleave", resetPosition);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="decorative-grid pointer-events-none absolute inset-0"
      ref={gridRef}
    >
      {Array.from({ length: 150 }).map((_, index) => {
        const x = 4 + seededRandom(index * 12.9898 + 78.233) * 92;
        const y = 6 + seededRandom(index * 78.233 + 12.9898) * 88;
        const dx = seededRandom(index * 9.13 + 3.14) * 6 - 3;
        const dy = seededRandom(index * 5.73 + 1.62) * 6 - 3;

        return (
          <span
            className="pulse-dot-wrap"
            key={index}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              "--dx": `${dx.toFixed(2)}`,
              "--dy": `${dy.toFixed(2)}`,
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: `${index % 3 === 0 ? 3 : 2}px`,
                height: `${index % 3 === 0 ? 3 : 2}px`,
                "--o": `${0.16 + (index % 5) * 0.06}`,
                opacity: `${0.16 + (index % 5) * 0.06}`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
