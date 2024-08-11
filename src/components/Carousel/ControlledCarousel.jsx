import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../index.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={5000}
      controls={true}
      pause={false}
      className="mainCarosuel"
    >
      <Carousel.Item>
        <img className="carosuelImg" src="/img/slider11.jpg"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carosuelImg" src="/img/slider12.jpg"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carosuelImg" src="/img/slider13.jpg"></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
