export default function AppointmentCard({ appointment }) {
  const prettyDate = new Date(`${appointment.date}T00:00:00`).toLocaleDateString(
    undefined,
    { day: "numeric", month: "short", year: "numeric" }
  );

  return (
    <article className="card appointment-card">
      <div className="appointment-date">
        <span>{prettyDate.split(" ")[0]}</span>
        <strong>{prettyDate.split(" ")[1]}</strong>
      </div>
      <div className="appointment-info">
        <div className="row-between">
          <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span>
          <span className="muted">{appointment.mode}</span>
        </div>
        <h3>{appointment.type}</h3>
        <p>{appointment.professional}</p>
        <small>{appointment.time}</small>
      </div>
    </article>
  );
}
