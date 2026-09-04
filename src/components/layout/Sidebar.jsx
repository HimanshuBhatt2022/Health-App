import { NavLink } from "react-router-dom";

const links = [
  ["/dashboard", "⌂", "Dashboard"],
  ["/activities", "◎", "Activities"],
  ["/appointments", "▣", "Appointments"],
  ["/progress", "↗", "Progress"],
  ["/profile", "☺", "Profile"]
];

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="brand">
        <div className="brand-mark">W</div>
        <div>
          <strong>WellNest</strong>
          <span>Wellbeing companion</span>
        </div>
      </div>

      <nav className="nav-list">
        {links.map(([to, icon, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-card">
        <span className="eyebrow">Weekly goal</span>
        <strong>5 of 7 active days</strong>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: "71%" }} />
        </div>
        <small>Keep your streak going.</small>
      </div>
    </aside>
  );
}
