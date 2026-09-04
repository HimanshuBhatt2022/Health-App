export default function LoadingSkeleton({ count = 3 }) {
  return (
    <div className="skeleton-grid" aria-label="Loading content">
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <span />
          <span />
          <span />
        </div>
      ))}
    </div>
  );
}
