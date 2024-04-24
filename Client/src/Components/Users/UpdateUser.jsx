import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();
  return (
    <div>
      <p>Hi</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <input
            className="text-xl font-semibold"
            placeholder={user.name}
          ></input>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex justify-between mt-4">
            <button className="w-full btn btn-outline">Save Change</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
