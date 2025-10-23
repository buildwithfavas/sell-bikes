import { useState } from "react";

export default function ErrorDemo() {
  const [explode, setExplode] = useState(false);

  // simulate a component throwing an error
  if (explode) {
    throw new Error("Demo error: component exploded!");
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 30,
        borderRadius: 15,
        backgroundColor: "#1f2937",
        color: "#f9fafb",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", marginBottom: 10 }}>Error Boundary Demo</h2>
      <p style={{ fontSize: "1rem", marginBottom: 20, lineHeight: 1.5 }}>
        Click the button to trigger an error and see the fallback UI.
      </p>
      <button
        onClick={() => setExplode(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: 8,
          fontSize: "1rem",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        Throw Error
      </button>
    </div>
  );
}
