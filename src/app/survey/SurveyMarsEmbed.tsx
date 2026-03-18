"use client";

import { useEffect, useRef } from "react";

const SURVEY_MARS_SRC =
  "https://surveymars.com/js/qembed.js?activity=7XlKogeOe&source=iframe&width=912";

export default function SurveyMarsEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // SurveyMars' qembed.js appends the iframe to the parent of the matching <script>.
    // Using next/script often injects into <head>, which results in nothing visible.
    el.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = SURVEY_MARS_SRC;
    el.appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div ref={containerRef} />
    </div>
  );
}

