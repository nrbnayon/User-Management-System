import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Villas = () => {
  const villas = useLoaderData();
  console.log("Villas data:", villas);

  return (
    <div>
      <h2>Villas</h2>
      {villas &&
        villas.map((villa) => (
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={villa.image} />
                <h3>{villa.estate_title}</h3>
                <br />
                <Link to={`/villa/${villa.id}`} className="btn btn-ghost">
                  Details{" "}
                </Link>

                <p>{villa.description}</p>
              </SwiperSlide>
            </Swiper>

            <Swiper
              // onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={villa.image} />
              </SwiperSlide>
            </Swiper>
          </>
        ))}
    </div>
  );
};

export default Villas;
