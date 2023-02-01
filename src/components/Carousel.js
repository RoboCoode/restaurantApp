import React, { useState } from "react";
import Card from "./Card";

const Carousel = (props) => {
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff < 5) {
      props.prev();
    }

    if (diff > -5) {
      props.next();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {props.currentIndex > 0 && (
          <button className="left-arrow" onClick={props.prev}>
            &lt;
          </button>
        )}

        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: props.mobSize
                ? `translateX(-${props.currentIndex * 55}%)`
                : `translateX(-${props.currentIndex * 30}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {props.children}
          </div>
        </div>
        <button className="right-arrow" onClick={props.next}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
