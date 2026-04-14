import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "radial-gradient(circle at 10% 20%, rgba(59,130,246,0.12) 0%, #020617 50%)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Name */}
      <div
        style={{
          fontSize: 80,
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        Parth Dudani
      </div>

      {/* Role */}
      <div
        style={{
          fontSize: 30,
          marginTop: "16px",
          color: "#60a5fa",
        }}
      >
        Software Engineer · Systems & Backend
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 24,
          marginTop: "28px",
          color: "#94a3b8",
          maxWidth: "800px",
          lineHeight: 1.4,
        }}
      >
        Building production systems, APIs, and real-time applications.
      </div>

      {/* Stack */}
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          gap: "16px",
          fontSize: 20,
          color: "#e2e8f0",
        }}
      >
        Node.js · React · AWS · DevOps
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
