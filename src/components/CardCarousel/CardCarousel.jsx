import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CardCarousel = ({ cards }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      {cards.map((card) => (
        <SwiperSlide
          key={card.id}
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
              <p style={{ margin: 0 }}>Price: {card.price}₼</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCarousel;
