import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaJava, FaPython, FaVuejs } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const INNER = [
  { Icon: FaReact,      label: "React",  color: "#61dafb", angle: 0   },
  { Icon: FaJsSquare,   label: "JS",     color: "#f7df1e", angle: 120 },
  { Icon: FaJava,       label: "Java",   color: "#f89820", angle: 240 },
];

const OUTER = [
  { Icon: FaPython,     label: "Python",  color: "#3776ab", angle: 0   },
  { Icon: SiSpringboot, label: "Spring",  color: "#6db33f", angle: 72  },
  { Icon: SiMysql,      label: "MySQL",   color: "#4479a1", angle: 144 },
  { Icon: FaVuejs,      label: "Vue",     color: "#42b883", angle: 216 },
  { Icon: TbBrandCSharp,label: "C#",      color: "#9b59b6", angle: 288 },
];

const OrbitalNode = ({ Icon, label, color, angle, radius, counterRotate, duration }) => (
  <div
    style={{
      position: "absolute",
      left: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
      top: `calc(50% - ${Math.cos((angle * Math.PI) / 180) * radius}px)`,
      transform: "translate(-50%, -50%)",
    }}
  >
    <motion.div
      animate={{ rotate: counterRotate }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
    >
      <div
        style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(8,12,16,0.92)",
          border: `1px solid ${color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 14px ${color}25`,
        }}
      >
        <Icon style={{ color, fontSize: "1rem" }} />
      </div>
      <span
        style={{
          fontFamily: "DM Mono, monospace",
          fontSize: "0.42rem",
          letterSpacing: "0.12em",
          color: "rgba(122,138,160,0.6)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </motion.div>
  </div>
);

OrbitalNode.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  counterRotate: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const OrbitalVisualization = () => (
  <div style={{ position: "relative", width: 360, height: 360, flexShrink: 0 }}>
    {/* Corner brackets */}
    <div style={{ position: "absolute", top: 0, left: 0, width: 18, height: 18, borderTop: "1.5px solid var(--accent)", borderLeft: "1.5px solid var(--accent)", opacity: 0.45 }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: 18, height: 18, borderTop: "1.5px solid var(--accent)", borderRight: "1.5px solid var(--accent)", opacity: 0.45 }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, width: 18, height: 18, borderBottom: "1.5px solid var(--accent)", borderLeft: "1.5px solid var(--accent)", opacity: 0.45 }} />
    <div style={{ position: "absolute", bottom: 0, right: 0, width: 18, height: 18, borderBottom: "1.5px solid var(--accent)", borderRight: "1.5px solid var(--accent)", opacity: 0.45 }} />

    {/* Orbit rings SVG */}
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <radialGradient id="cg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#63b3ff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#63b3ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="180" cy="180" r="52" fill="url(#cg)" />
      <circle cx="180" cy="180" r="85" fill="none" stroke="rgba(99,179,255,0.1)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="180" cy="180" r="140" fill="none" stroke="rgba(99,179,255,0.07)" strokeWidth="0.8" strokeDasharray="2 7" />
    </svg>

    {/* Center pulsing element */}
    <motion.div
      animate={{
        boxShadow: [
          "0 0 20px rgba(99,179,255,0.15), inset 0 0 15px rgba(99,179,255,0.05)",
          "0 0 40px rgba(99,179,255,0.28), inset 0 0 22px rgba(99,179,255,0.12)",
          "0 0 20px rgba(99,179,255,0.15), inset 0 0 15px rgba(99,179,255,0.05)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 72, height: 72, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,179,255,0.12) 0%, rgba(8,12,16,0.95) 70%)",
        border: "1.5px solid rgba(99,179,255,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <span style={{ fontFamily: "DM Mono, monospace", fontSize: "0.85rem", color: "var(--accent)", letterSpacing: "-0.05em" }}>
        {"</>"}
      </span>
    </motion.div>

    {/* Inner orbit — clockwise */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ position: "absolute", inset: 0 }}
    >
      {INNER.map((node) => (
        <OrbitalNode key={node.label} {...node} radius={85} counterRotate={-360} duration={30} />
      ))}
    </motion.div>

    {/* Outer orbit — counter-clockwise */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      style={{ position: "absolute", inset: 0 }}
    >
      {OUTER.map((node) => (
        <OrbitalNode key={node.label} {...node} radius={140} counterRotate={360} duration={50} />
      ))}
    </motion.div>

    {/* Status bar */}
    <div
      style={{
        position: "absolute", bottom: 8, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", alignItems: "center", gap: "0.4rem",
        fontFamily: "DM Mono, monospace", fontSize: "0.4rem",
        color: "var(--text-muted)", letterSpacing: "0.15em", whiteSpace: "nowrap",
      }}
    >
      <span style={{ color: "var(--accent3)", fontSize: "6px" }}>●</span>
      SYS::ONLINE · STACK::ACTIVE
    </div>
  </div>
);

export default OrbitalVisualization;