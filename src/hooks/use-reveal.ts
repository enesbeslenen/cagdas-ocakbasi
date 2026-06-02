import { useEffect } from "react";

function markInView(el: Element) {
  el.classList.add("in-view");
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewHeight * 0.95 && rect.bottom > 0;
}

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const observeElements = () => {
      const els = document.querySelectorAll(".reveal:not(.in-view)");
      if (els.length === 0) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              markInView(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
      );

      els.forEach((el) => {
        // iOS Safari sometimes skips the first IO callback for in-viewport nodes.
        if (isInViewport(el)) {
          markInView(el);
          return;
        }
        io.observe(el);
      });

      return io;
    };

    let io = observeElements();

    const onResize = () => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
        if (isInViewport(el)) markInView(el);
      });
    };

    const fallbackTimer = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach(markInView);
    }, 1200);

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("resize", onResize);
      io?.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}
