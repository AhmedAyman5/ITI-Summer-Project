import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./Home.css"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSection() {
  return (
    <div className="container hero my-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-slide-card row align-items-center text-white shadow-lg p-5"
          style={{ background: 'linear-gradient(135deg, #516095d6, #363e45ff)'}}>
            <div className="col-md-6 text-center ">
              <h5 className="text-light">Best Deal Online on smart watches</h5>
              <h1 className="fw-bold">
               SMART WEARABLE
              </h1>
              <p className="text-light fs-3">UP TO 80% OFF</p>
              <button className="btn  rounded-pill shadow text-primary fw-bold">
                Shop Now
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/imgs/image 2.png" 
                alt="Smart Watch"
                className="img-fluid"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-slide-card row align-items-center text-white shadow-lg  p-5"
          style={{ background: 'linear-gradient(135deg, #3a3737ac, #a37c67ef)'}}>
            <div className="col-md-6 text-center ">
              <h5 className="text-light">New Collection</h5>
              <h1 className="fw-bold">
                TRENDING SMARTPHONES
              </h1>
              <p className="text-light fs-3">UP TO 50% OFF</p>
              <button className="btn  rounded-pill text-primary fw-bold">
                Shop Now
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/imgs/image 9 (1).png"
                alt="Smartphone"
                className="img-fluid"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* {slide 3} */}
 <SwiperSlide>
  <div className="hero-slide-card row align-items-center text-white shadow-lg p-5"
  style={{ background: 'linear-gradient(135deg, #28a796ff, #23b18d63)'}}>
    <div className="col-md-6 text-center">
      <h5 className="text-light">Fresh & Organic</h5>
      <h1 className="fw-bold">
        PREMIUM FRUITS COLLECTION
      </h1>
      <p className="text-light fs-3">UP TO 50% OFF</p>
      <button className="btn text-primary rounded-pill fw-bold px-4">
        Shop Now
      </button>
    </div>
    <div className="col-md-6 text-center">
      <img
        src="/imgs/pngegg 1.png"
        alt="Fresh Fruits"
        className="img-fluid"
        style={{
          maxHeight: '400px', 
          width: 'auto', 
          transform: 'scale(1.2)' 
        }}
      />
    </div>
  </div>
</SwiperSlide>
{/* Slide 4 - Fashion */}
<SwiperSlide>
  <div className="hero-slide-card row align-items-center text-white shadow-lg p-4 " 
         style={{ background: 'linear-gradient(135deg, #e83e8d7e, #a75f2db9)'}}>
    <div className="col-md-6 text-center ">
      <h5 className="text-light">New Arrivals</h5>
      <h2 className="fw-bold">TRENDING FASHION COLLECTION</h2>
      <p className="text-light fs-4">UP TO 60% OFF</p>
      <button className="btn btn-light rounded-pill text-primary fw-bold px-4" >
        Shop Now
      </button>
    </div>
    <div className="col-md-6 text-center">
      <img src="/imgs/fashion.png" alt="Fashion" className="img-fluid" style={{maxHeight: '280px'}}/>
    </div>
  </div>
</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
