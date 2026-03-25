const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;