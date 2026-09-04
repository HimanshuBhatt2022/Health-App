import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import ProgressChart from "../components/features/ProgressChart";
import AppointmentCard from "../components/features/AppointmentCard";
import ActivityCard from "../components/features/ActivityCard";
import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { user, activities, appointments, toggleActivity } = useApp();
  const completed = activities.filter((a) => a.completed).length;
  const score = Math.round((completed / activities.length) * 100);
  const upcoming = appointments.filter((a) => a.status === "Upcoming");

  return (
    <>
      <PageHeader
        eyebrow="Today"
        title={`Good afternoon, ${user.name.split(" ")[0]}`}
        description="A clear view of your wellbeing routine, progress, and upcoming care."
        action={<Link className="button primary" to="/activities">Explore activities</Link>}
      />

      <section className="stats-grid" aria-label="Wellbeing summary">
        <StatCard label="Wellbeing score" value={`${Math.max(score, 68)}%`} detail="+6% this week" icon="♡" />
        <StatCard label="Activities completed" value={`${completed}/${activities.length}`} detail="Today" icon="✓" />
        <StatCard label="Active streak" value="5 days" detail="Personal best: 9" icon="⚡" />
        <StatCard label="Next appointment" value={upcoming[0]?.time || "None"} detail={upcoming[0]?.date || "Book one"} icon="◷" />
      </section>

      <section className="dashboard-grid">
        <article className="card chart-card">
          <div className="section-head">
            <div>
              <p className="eyebrow">Progress</p>
              <h2>Weekly wellbeing score</h2>
            </div>
            <Link to="/progress">View details</Link>
          </div>
          <ProgressChart />
        </article>

        <article className="card routine-card">
          <div className="section-head">
            <div>
              <p className="eyebrow">Daily focus</p>
              <h2>3 simple actions</h2>
            </div>
          </div>
          <div className="mini-checklist">
            <label><input type="checkbox" defaultChecked /> Drink 6–8 glasses of water</label>
            <label><input type="checkbox" /> Take a 20 minute walk</label>
            <label><input type="checkbox" /> Wind down before bedtime</label>
          </div>
        </article>
      </section>

      <section className="content-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Recommended</p>
            <h2>Activities for you</h2>
          </div>
          <Link to="/activities">See all</Link>
        </div>
        <div className="cards-grid">
          {activities.slice(0, 3).map((item) => (
            <ActivityCard key={item.id} activity={item} onToggle={toggleActivity} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Care plan</p>
            <h2>Upcoming appointments</h2>
          </div>
          <Link to="/appointments">Manage</Link>
        </div>
        <div className="appointment-list">
          {upcoming.slice(0, 2).map((item) => <AppointmentCard key={item.id} appointment={item} />)}
        </div>
      </section>
    </>
  );
}
