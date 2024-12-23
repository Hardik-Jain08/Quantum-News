export default function DashboardFilters({ filters, setFilters }) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Filter by Author"
        value={filters.author}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, author: e.target.value }))
        }
        className="p-2 border rounded"
      />
      <select
        value={filters.type}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, type: e.target.value }))
        }
        className="p-2 border rounded"
      >
        <option value="">All Types</option>
        <option value="news">News</option>
        <option value="blogs">Blogs</option>
      </select>
      <div className="flex gap-2">
        <input
          type="date"
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              dateRange: { ...prev.dateRange, start: e.target.value },
            }))
          }
          className="p-2 border rounded"
        />
        <input
          type="date"
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              dateRange: { ...prev.dateRange, end: e.target.value },
            }))
          }
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
}
