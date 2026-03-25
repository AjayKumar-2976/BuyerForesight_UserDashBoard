import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then((res) => setUser(res.data));
  }, [id]);

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );

  return (
 <div className="h-screen flex items-center justify-center bg-gray-100">

  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

    <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
      User Details
    </h2>

    <div className="space-y-3 text-gray-700">

      {/* Row */}
      <div className="flex">
        <span className="w-24 font-semibold">Name</span>
        <span className="w-4 text-center">:</span>
        <span>{user.name}</span>
      </div>

      <div className="flex">
        <span className="w-24 font-semibold">Email</span>
        <span className="w-4 text-center">:</span>
        <span>{user.email}</span>
      </div>

      <div className="flex">
        <span className="w-24 font-semibold">Phone</span>
        <span className="w-4 text-center">:</span>
        <span>{user.phone}</span>
      </div>

      <div className="flex">
        <span className="w-24 font-semibold">Website</span>
        <span className="w-4 text-center">:</span>
        <span>{user.website}</span>
      </div>

      <div className="flex">
        <span className="w-24 font-semibold">Company</span>
        <span className="w-4 text-center">:</span>
        <span>{user.company.name}</span>
      </div>

      <div className="flex">
        <span className="w-24 font-semibold">Address</span>
        <span className="w-4 text-center">:</span>
        <span>
          {user.address.street}, {user.address.city}
        </span>
      </div>

    </div>

  </div>

</div>
  );
};

export default UserDetail;