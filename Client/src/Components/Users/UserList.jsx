import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserList = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    setUsers(usersData);
  }, [usersData]);

  const handleDelete = (_id) => {
    console.log("Deleting user:", _id);
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Delete response:", data);
        if (data.success) {
          alert("User deleted successfully");
          // Update state immediately after successful deletion
          setUsers(users.filter((user) => user._id !== _id));
        } else {
          alert("Delete failed: User not found");
        }
      })

      .catch((error) => {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting user");
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/update/${user._id}`} className="btn btn-primary">
                Update
              </Link>
              <button
                className="btn btn-secondary"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/users">
        <button className="w-full btn btn-outline">Go Add User</button>
      </Link>
    </div>
  );
};

export default UserList;
