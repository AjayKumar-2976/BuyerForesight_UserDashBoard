import { useNavigate } from "react-router-dom";

const UserTable = ({ users }) => {
  const navigate = useNavigate();

  return (
   <div className="w-full">
  <table className="w-full border-collapse">

    <thead>
      <tr className="bg-gray-200 text-center">
        <th className="p-3">Name</th>
        <th className="p-3">Email</th>
        <th className="p-3">Phone</th>
        <th className="p-3">Company</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user) => (
        <tr
          key={user.id}
          onClick={() => navigate(`/user/${user.id}`)}
          className="hover:bg-gray-100 cursor-pointer border-b"
        >
          <td className="p-3">{user.name}</td>
          <td className="p-3">{user.email}</td>
          <td className="p-3">{user.phone}</td>
          <td className="p-3">{user.company.name}</td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
  );
};

export default UserTable;