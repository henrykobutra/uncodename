import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "UNCODENAME — Startup Name Generator"; // twitter
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
              "radial-gradient(ellipse at 50% 40%, rgba(34,197,94,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            fontSize: 112,
            fontWeight: 900,
            color: "#fafafa",
            letterSpacing: "-0.02em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Novaforge
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
          Every startup needs a name nobody can spell
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
          uncodename.vercel.app/startups
        </div>
      </div>
    ),
    { ...size }
  );
}
