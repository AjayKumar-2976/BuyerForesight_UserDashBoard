import { useEffect, useState } from "react";
import { getUsers } from "../api";
import UserTable from "../Components/UserTable";
import SearchBar from "../Components/SearchBar";
import SortControls from "../Components/SortControls";
import Pagination from "../Components/Pagination";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", order: "asc" });
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
const usersPerPage = 6;

const indexOfLast = currentPage * usersPerPage;
const indexOfFirst = indexOfLast - usersPerPage;

const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let data = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (sortConfig.key) {
      data.sort((a, b) => {
        let valA =
          sortConfig.key === "company"
            ? a.company.name.toLowerCase()
            : a.name.toLowerCase();

        let valB =
          sortConfig.key === "company"
            ? b.company.name.toLowerCase()
            : b.name.toLowerCase();

        if (valA < valB) return sortConfig.order === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.order === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredUsers(data);
  }, [search, sortConfig, users]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );

  return (
<div className="h-screen w-full bg-gray-100 flex flex-col">

  {/* HEADER */}
 <div className="w-full bg-gradient-to-r from-grey-500 via-blue-500 to-green-500 py-6 shadow-lg">
  <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md">
    User Directory Dashboard
  </h1>
</div>

  {/* SEARCH + SORT */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-2 mb-3">
    <SearchBar search={search} setSearch={setSearch} />
    <SortControls setSortConfig={setSortConfig} />
  </div>

  {/* TABLE FULL WIDTH */}
  <div className="flex-1 w-full overflow-auto px-2">
    <UserTable users={currentUsers} />
  </div>

  {/* PAGINATION */}
  <div className="py-3 text-center">
    <Pagination
      totalUsers={filteredUsers.length}
      usersPerPage={6}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  </div>

</div>
  );
};

export default Dashboard;