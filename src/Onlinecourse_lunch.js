import React from "react";

export default function OnlineCourseLunch({ width = 1080, height = 1350 }) {
  const scale = Math.min(width / 1080, height / 1350);

  const sizes = {
    cardRadius: Math.round(28 * scale),
    cardBorder: Math.round(8 * scale),
    handSize: Math.round(130 * scale),
    title: Math.round(36 * scale),
    subtitle: Math.round(30 * scale),
    badge: Math.round(18 * scale),
    cta: Math.round(18 * scale),
    micro: Math.round(13 * scale),
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: `${48 * scale}px ${32 * scale}px`,
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ position: "relative", transform: "rotate(-6deg)", marginBottom: `${64 * scale}px` }}>
        <div
          style={{
            position: "absolute",
            top: `${-82 * scale}px`,
            left: "50%",
            transform: "translateX(-50%)",
            width: `${sizes.handSize}px`,
            height: `${sizes.handSize}px`,
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: `${Math.round(sizes.handSize * 0.6)}px`,
              height: `${Math.round(sizes.handSize * 0.48)}px`,
              background: "linear-gradient(180deg, #FF9547, #FF7B1C)",
              borderRadius: "999px 999px 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: `${Math.round(sizes.handSize * 0.42)}px`,
              left: "50%",
              transform: "translateX(-50%)",
              width: `${Math.round(sizes.handSize * 0.76)}px`,
              height: `${Math.round(sizes.handSize * 0.64)}px`,
              background: "linear-gradient(135deg, #FFB380, #FF9547)",
              borderRadius: `${Math.round(sizes.handSize * 0.18)}px`,
            }}
          >
            {[0, 1, 2, 3].map((finger) => (
              <div
                key={`finger-${finger}`}
                style={{
                  position: "absolute",
                  top: `${-Math.round(sizes.handSize * 0.08)}px`,
                  left: `${Math.round(sizes.handSize * 0.06 + finger * sizes.handSize * 0.16)}px`,
                  width: `${Math.round(sizes.handSize * 0.16)}px`,
                  height: `${Math.round(sizes.handSize * (finger === 1 ? 0.32 : 0.26))}px`,
                  background: "linear-gradient(135deg, #FFB380, #FF9547)",
                  borderRadius: "999px",
                  transform: `rotate(${finger * 8 - 10}deg)`,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                top: `${Math.round(sizes.handSize * 0.26)}px`,
                left: `${Math.round(sizes.handSize * 0.12)}px`,
                right: `${Math.round(sizes.handSize * 0.12)}px`,
                display: "flex",
                flexDirection: "column",
                gap: `${Math.round(sizes.handSize * 0.05)}px`,
              }}
            >
              {[0, 1, 2].map((line) => (
                <div
                  key={`line-${line}`}
                  style={{
                    height: `${Math.max(1, Math.round(sizes.handSize * 0.03))}px`,
                    background: "rgba(255, 123, 28, 0.35)",
                    borderRadius: "999px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: `${Math.round(380 * scale)}px`,
            background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
            borderRadius: `${sizes.cardRadius}px`,
            border: `${sizes.cardBorder}px solid #FBBF24`,
            padding: `${32 * scale}px ${36 * scale}px`,
            boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: `${sizes.cardRadius}px`,
              background: "#FBBF24",
              transform: `translate(${Math.round(6 * scale)}px, ${Math.round(6 * scale)}px)`,
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: `${sizes.cardRadius}px`,
              background: "#F59E0B",
              transform: `translate(${Math.round(12 * scale)}px, ${Math.round(12 * scale)}px)`,
              zIndex: -2,
            }}
          />

          <h1
            style={{
              fontSize: `${sizes.title}px`,
              color: "#154B54",
              lineHeight: 1.1,
              margin: 0,
              fontWeight: 700,
            }}
          >
            EduBridge
            <br />
            Academy
          </h1>
          <h2
            style={{
              fontSize: `${sizes.subtitle}px`,
              color: "#154B54",
              lineHeight: 1.1,
              margin: `${16 * scale}px 0 ${24 * scale}px`,
              fontWeight: 700,
            }}
          >
            Financial Instruments
            <br />
            Waitlist
          </h2>

          <div
            style={{
              display: "inline-block",
              background: "#FBBF24",
              padding: `${12 * scale}px ${32 * scale}px`,
              borderRadius: "999px",
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#154B54",
                fontSize: `${sizes.badge}px`,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 700,
              }}
            >
              Opening 2025
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.8)",
            fontSize: `${sizes.micro}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: `${8 * scale}px`,
          }}
        >
          Learn More Here <span style={{ fontSize: `${sizes.cta}px` }}>▼</span>
        </p>

        <div
          style={{
            marginTop: `${16 * scale}px`,
            background: "#1A6B75",
            padding: `${16 * scale}px ${32 * scale}px`,
            borderRadius: `${16 * scale}px`,
            border: "2px solid #6EE7B7",
            boxShadow: "0 16px 30px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: `${sizes.cta}px`,
              fontWeight: 600,
            }}
          >
            https://bit.ly/ea_waitlist
          </p>
          <p
            style={{
              margin: `${10 * scale}px 0 0`,
              fontSize: `${sizes.micro}px`,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Waitlist only • Test a mini version of the product
          </p>
        </div>
      </div>
    </div>
  );
}
