import { useLoaderData } from "react-router-dom";

const Villa = () => {
  const villa = useLoaderData();
  return (
    <div>
      details{villa.estate_title}
      <img src={villa.image} />
    </div>
  );
};

export default Villa;
