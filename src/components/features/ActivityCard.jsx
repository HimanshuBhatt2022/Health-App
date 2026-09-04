export default function ActivityCard({ activity, onToggle }) {
  return (
    <article className={`card activity-card ${activity.completed ? "completed" : ""}`}>
      <div className="activity-top">
        <span className="activity-icon" aria-hidden="true">{activity.icon}</span>
        <span className="pill">{activity.category}</span>
      </div>
      <h3>{activity.title}</h3>
      <p>{activity.duration} min · {activity.points} wellbeing points</p>
      <button
        className={activity.completed ? "button secondary" : "button primary"}
        onClick={() => onToggle(activity.id)}
      >
        {activity.completed ? "Mark incomplete" : "Complete activity"}
      </button>
    </article>
  );
}
