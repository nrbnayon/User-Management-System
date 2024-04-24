import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };

    fetch(`http://localhost:3000/user/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <p>Hi</p>
      <form onSubmit={handleUpdate}>
        <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
          <input
            className="text-xl font-semibold"
            defaultValue={user.name}
            name="name"
          ></input>
          <input
            className="text-gray-600"
            name="email"
            defaultValue={user.email}
          ></input>
          <button className="w-full btn btn-outline">Save Change</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
