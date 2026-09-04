import { useApp } from "../../context/AppContext";

export default function Topbar() {
  const { theme, setTheme, user } = useApp();

  return (
    <header className="topbar">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div>
        <p className="topbar-kicker">Health & wellbeing</p>
        <strong className="mobile-brand">WellNest</strong>
      </div>

      <div className="topbar-actions">
        <button
          className="icon-button"
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle colour theme"
          title="Toggle theme"
        >
          {theme === "light" ? "☾" : "☀"}
        </button>
        <div className="avatar" aria-hidden="true">
          {user.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}
        </div>
      </div>
    </header>
  );
}
