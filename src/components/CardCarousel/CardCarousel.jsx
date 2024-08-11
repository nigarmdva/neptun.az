import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

const CardCarousel = ({ cards }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4} // Display 4 cards per slide
      navigation
      pagination={{ clickable: true }}
    >
      {cards.map((card, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "18rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ padding: "16px" }}>
              <h5 style={{ margin: "0 0 8px" }}>{card.title}</h5>
              <p style={{ margin: 0 }}>Price: ${card.price}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
