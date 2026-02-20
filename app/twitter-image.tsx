import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "UNCODENAME — Codename Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.35em",
            color: "#71717a",
            textTransform: "uppercase",
            fontFamily: "monospace",
            marginBottom: 12,
          }}
        >
          Project
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#fafafa",
            letterSpacing: "-0.02em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          PHANTOM NEXUS
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontSize: 14,
            letterSpacing: "0.25em",
            color: "#3f3f46",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          Every great project starts with a name
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 13,
            color: "#27272a",
            fontFamily: "monospace",
          }}
        >
          uncodename.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
