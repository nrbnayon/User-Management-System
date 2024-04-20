import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BGImg from "../../assets/wave.svg";

const Home = () => {
  return (
    <div>
      <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-135px)]">
        <Helmet>
          <title>User Authentication | Home</title>
        </Helmet>
        <Banner />
        <img
          src={BGImg}
          className="w-full absolute bottom-0"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Home;
