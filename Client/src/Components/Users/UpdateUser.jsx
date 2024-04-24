import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loadUser = useLoaderData();
  console.log(loadUser);
  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default UpdateUser;
