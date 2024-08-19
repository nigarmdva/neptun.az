import React from "react";
import styleCards from "./cards.module.css";
import { BsArrowRight } from "react-icons/bs";

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
              <BsArrowRight className={styleCards.cardIcon} />
            </div>
          </div>
          <div className={styleCards.card} id={styleCards.card2}>
            <div className={styleCards.img}>
              <img src="/img/cards2.jpg" alt="Neptun" />
            </div>
            <div className={styleCards.text}>
              <span>Neptunda dadlı endirimlər</span>
              <BsArrowRight className={styleCards.cardIcon} />
            </div>
          </div>
          <div className={styleCards.card}>
            <div className={styleCards.img}>
              <img src="/img/cards3.jpg" alt="Neptun" />
            </div>
            <div className={styleCards.text}>
              <span>Həftəsonu endirimləri Neptunda!</span>
              <BsArrowRight className={styleCards.cardIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
