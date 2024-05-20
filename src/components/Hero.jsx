import React from "react";

function Hero() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./img/pizza4.jpg"
            className="d-block w-100 caroheight"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Delicious Pizza</h5>
            <p>
              Savor the cheesy goodness with our signature pizzas - crafted to
              perfection for every bite
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./img/pizza1.jpg"
            className="d-block w-100 caroheight"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spicy Hot</h5>
            <p>
              Indulge in a medley of flavors! Our pizzas, made with the freshest
              ingredients, redefine deliciousness.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./img/pizza3.jpg"
            className="d-block w-100 caroheight"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Pure Happiness</h5>
            <p>
              Craving a slice of happiness? Our pizzas promise a symphony of
              taste that'll leave you wanting more
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;
