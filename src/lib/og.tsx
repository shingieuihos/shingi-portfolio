// Shared Open Graph card for LinkedIn / social sharing.
// 1200×630 landscape (1.91:1) — the size LinkedIn, X and Facebook expect.
// Rendered to a static PNG at build time via next/og's ImageResponse,
// which works under `output: export` as long as the route is statically generated.
import type { ReactElement } from "react";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Brand tokens mirrored from globals.css (@theme).
const CANVAS = "#0a0a0b";
const FOREGROUND = "#f5f2ee";
const MUTED = "#a3a3a3";
const ACCENT = "#d4a857";

export function OgCard({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: string;
  meta: string;
}): ReactElement {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: CANVAS,
        backgroundImage:
          "radial-gradient(ellipse 90% 70% at 50% -15%, rgba(212,168,87,0.20), transparent 60%)",
        padding: "72px 80px",
        color: FOREGROUND,
        fontFamily: "sans-serif",
      }}
    >
      {/* Top row: wordmark + eyebrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", letterSpacing: 1 }}>
          <span style={{ color: FOREGROUND }}>shingi</span>
          <span style={{ color: ACCENT, margin: "0 10px" }}>/</span>
          <span style={{ color: FOREGROUND }}>tech</span>
        </div>
        <div style={{ display: "flex", color: ACCENT, fontSize: 22, letterSpacing: 4 }}>
          {eyebrow.toUpperCase()}
        </div>
      </div>

      {/* Title */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 60 : 72,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -1.5,
          }}
        >
          {title}
        </div>
      </div>

      {/* Bottom row: author + meta, over a gold rule */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            height: 3,
            width: "100%",
            backgroundColor: "rgba(212,168,87,0.45)",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: "rgba(212,168,87,0.15)",
                border: "1px solid rgba(212,168,87,0.40)",
                color: ACCENT,
                fontSize: 28,
                marginRight: 18,
              }}
            >
              S
            </div>
            <span style={{ color: FOREGROUND }}>Shingi Mudyirwa</span>
          </div>
          <div style={{ display: "flex" }}>{meta}</div>
        </div>
      </div>
    </div>
  );
}
