import { useMemo, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import ActivityCard from "../components/features/ActivityCard";
import LoadingSkeleton from "../components/ui/LoadingSkeleton";
import EmptyState from "../components/ui/EmptyState";
import useMockFetch from "../hooks/useMockFetch";
import { useApp } from "../context/AppContext";

export default function Activities() {
  const { activities, toggleActivity } = useApp();
  const { loading, error } = useMockFetch(activities);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(activities.map((a) => a.category))];

  const filtered = useMemo(() => {
    return activities.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [activities, search, category]);

  return (
    <>
      <PageHeader
        eyebrow="Activities"
        title="Build habits that fit your day"
        description="Browse, filter, and complete small wellbeing activities."
      />

      <div className="toolbar card">
        <label className="field grow">
          <span>Search activities</span>
          <input
            type="search"
            placeholder="Search by activity name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label className="field">
          <span>Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      {loading && <LoadingSkeleton count={6} />}
      {error && <div className="alert error">{error}</div>}

      {!loading && !error && (
        filtered.length ? (
          <div className="cards-grid">
            {filtered.map((item) => (
              <ActivityCard key={item.id} activity={item} onToggle={toggleActivity} />
            ))}
          </div>
        ) : (
          <EmptyState title="No activities found" text="Try a different search or category." />
        )
      )}
    </>
  );
}
