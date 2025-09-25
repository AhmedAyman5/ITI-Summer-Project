import React from 'react';
import "./Home.css";

function AboutSection() {
  return (
    <section className="about-section py-5 rounded-5 mb-5 mt-5 shadow-lg ">
      <div className="container-fluid d-flex flex-wrap align-items-center">
        <div className="about-text col-md-6">
          <h2 className="fw-bold mb-3 text-secondary">About Us</h2>
          <p>
            Welcome to <b className='text-primary fs-4'><i>ShopEasy</i></b>, your number one source for smart shopping. 
            We are dedicated to giving you the very best of products, 
            with a focus on quality, customer service, and uniqueness.
          </p>
        </div>
        <div className="about-image col-md-6 text-center">
          <img 
            src="/imgs/about2.png" 
            alt="About Us" 
            className="img-fluid  rounded-5 shadow-lg "
            style={{ maxHeight: "300px" , maxWidth:"600PX"}}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
