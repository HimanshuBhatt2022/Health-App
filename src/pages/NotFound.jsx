import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="brand-mark">W</div>
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button primary" to="/dashboard">Return to dashboard</Link>
    </main>
  );
}
