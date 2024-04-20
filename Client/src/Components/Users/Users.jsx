import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([]);
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">User Management System</h3>
      <h3 className="text-xl text-center font-bold">
        Total User {users.length}
      </h3>
    </div>
  );
};

export default Users;
