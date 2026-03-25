const SortControls = ({ setSortConfig }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => setSortConfig({ key: "name", order: "asc" })}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        Name ↑
      </button>

      <button
        onClick={() => setSortConfig({ key: "name", order: "desc" })}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        Name ↓
      </button>

      <button
        onClick={() => setSortConfig({ key: "company", order: "asc" })}
        className="bg-green-500 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        Company ↑
      </button>

      <button
        onClick={() => setSortConfig({ key: "company", order: "desc" })}
        className="bg-green-500 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        Company ↓
      </button>
    </div>
  );
};

export default SortControls;