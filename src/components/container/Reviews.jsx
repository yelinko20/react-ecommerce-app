import { reviews } from "../../Data/Data";
import { BsStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
export default function Reviews() {
  return (
    <section className="container">
      <div className="title">
        What Our <span>Customers Say</span>
      </div>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay, Pagination]}
        slidesPerGroup={1}
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <div className="swiperBlah">
                <img src={review.reviewImg} alt="" />
                <div>
                  <div className="icon">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                  <div className="reviewer">
                    {review.reviewer} <a href="">{review.reviewProduct}</a>
                  </div>
                  <p className="review">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
