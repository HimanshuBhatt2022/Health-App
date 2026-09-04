import PageHeader from "../components/ui/PageHeader";
import ProgressChart from "../components/features/ProgressChart";
import StatCard from "../components/ui/StatCard";
import { useApp } from "../context/AppContext";

export default function Progress() {
  const { activities } = useApp();
  const completed = activities.filter((item) => item.completed).length;

  return (
    <>
      <PageHeader
        eyebrow="Progress"
        title="See how your routine is changing"
        description="Progress is shown using simple weekly indicators rather than overwhelming health data."
      />

      <section className="stats-grid">
        <StatCard label="Weekly average" value="77%" detail="+8 points vs last week" icon="↗" />
        <StatCard label="Activities" value={completed} detail="Completed this cycle" icon="✓" />
        <StatCard label="Mindful minutes" value="64" detail="+12 this week" icon="◎" />
        <StatCard label="Consistency" value="5/7" detail="Active days" icon="⚡" />
      </section>

      <section className="dashboard-grid">
        <article className="card chart-card">
          <div className="section-head">
            <div>
              <p className="eyebrow">7 day view</p>
              <h2>Wellbeing trend</h2>
            </div>
          </div>
          <ProgressChart />
        </article>

        <article className="card">
          <p className="eyebrow">Goal progress</p>
          <h2>September targets</h2>
          <div className="goal-list">
            <div>
              <div className="row-between"><span>Movement</span><strong>78%</strong></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "78%" }} /></div>
            </div>
            <div>
              <div className="row-between"><span>Mindfulness</span><strong>64%</strong></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "64%" }} /></div>
            </div>
            <div>
              <div className="row-between"><span>Recovery</span><strong>71%</strong></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "71%" }} /></div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
