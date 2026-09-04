export default function StatCard({ label, value, detail, icon }) {
  return (
    <article className="card stat-card">
      <div className="stat-icon" aria-hidden="true">{icon}</div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <small>{detail}</small>
      </div>
    </article>
  );
}
