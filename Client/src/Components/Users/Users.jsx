const Users = () => {
  const handleAddUser = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const newUser = await response.json();
      console.log("New User", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h3 className="text-3xl text-center font-bold">User Management System</h3>
      <h3 className="text-xl text-center font-bold"></h3>
      <div>
        <form onSubmit={handleAddUser} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              // onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Email"
              // onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Users;

// import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";

// const Users = () => {
//   const initialFormState = { name: "", email: "" };
//   const usersData = useLoaderData();
//   const [users, setUsers] = useState(usersData);
//   const [userForm, setUserForm] = useState(initialFormState);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/users");
//       if (!response.ok) {
//         throw new Error("Failed to fetch users");
//       }
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserForm({ ...userForm, [name]: value });
//   };

//   const handleAddUser = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userForm),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to create user");
//       }

//       const newUser = await response.json();
//       setUsers([...users, newUser]);
//       setUserForm(initialFormState);
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   return (
//     <div>
//       <h3 className="text-3xl text-center font-bold">User Management System</h3>
//       <h3 className="text-xl text-center font-bold">
//         Total User {users.length}
//       </h3>
//       <div>
//         <form onSubmit={handleAddUser} className="max-w-md mx-auto">
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={userForm.name}
//               onChange={handleInputChange}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={userForm.email}
//               onChange={handleInputChange}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       <div className="text-center">
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Users;
