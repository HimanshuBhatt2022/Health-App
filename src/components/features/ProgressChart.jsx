import { progress } from "../../data/mockData";

export default function ProgressChart() {
  const max = 100;
  return (
    <div className="bar-chart" role="img" aria-label="Weekly wellbeing score chart">
      {progress.map((item) => (
        <div className="bar-item" key={item.day}>
          <div className="bar-track">
            <div
              className="bar-value"
              style={{ height: `${(item.value / max) * 100}%` }}
              title={`${item.day}: ${item.value}%`}
            />
          </div>
          <span>{item.day}</span>
        </div>
      ))}
    </div>
  );
}
