import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";
// images
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11.00 am to 10.00 pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-8 mt-8"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white ">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white ">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white ">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-4xl uppercase text-center  text-white ">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
