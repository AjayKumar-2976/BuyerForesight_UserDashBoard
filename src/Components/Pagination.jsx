const Pagination = ({ totalUsers, usersPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50  cursor-pointer"
       
      >
        Prev
      </button>

      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50  cursor-pointer"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;