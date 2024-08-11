import React from "react";
import styleCards from "./cards.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Cards = () => {
  return (
    <>
      <div className={styleCards.containerCards}>
        <div className={styleCards.cards}>
          <div className={styleCards.card}>
            <div className={styleCards.img}>
              <img src="/img/cards1.jpg" alt="Neptun" />
            </div>
            <div className={styleCards.text}>
              <span>50 AZN 50 Bonus</span>
              <FaArrowRightLong style={{ fontSize: "1.6em" }} />
            </div>
          </div>
          <div className={styleCards.card} id={styleCards.card2}>
            <div className={styleCards.img}>
              <img src="/img/cards2.jpg" alt="Neptun" />
            </div>
            <div className={styleCards.text}>
              <span>Neptunda dadlı endirimlər</span>
              <FaArrowRightLong style={{ fontSize: "1.6em" }} />
            </div>
          </div>
          <div className={styleCards.card}>
            <div className={styleCards.img}>
              <img src="/img/cards3.jpg" alt="Neptun" />
            </div>
            <div className={styleCards.text}>
              <span>Həftəsonu endirimləri Neptunda!</span>
              <FaArrowRightLong style={{ fontSize: "1.6em" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
