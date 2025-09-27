"use client";
import { useEffect, useState, useCallback } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => requestAnimationFrame(onScroll);
    window.addEventListener("scroll", handle, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", handle);
  }, [onScroll]);

  const scrollToTop = () => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-4 right-4
        w-11 h-11 sm:w-11 sm:h-11
        rounded-full
        bg-[#00A859]
        text-white text-xl
        flex items-center justify-center
        shadow-lg
        transition-transform transition-shadow duration-200 ease-in-out
        hover:-translate-y-0.5 hover:shadow-xl
        active:translate-y-0
        z-50
        md:w-11 md:h-11
      "
    >
      <FaArrowCircleUp />
    </button>
  );
}
