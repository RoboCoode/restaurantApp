import React, { useState } from "react";
import Card from "./Card";

let arrdishes = [
  {
    name: "Lasagna",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ",

    price: "5 €",
    image:
      "https://media.istockphoto.com/id/1096466528/photo/slice-of-lasagna.jpg?s=612x612&w=0&k=20&c=REZOwYgrlST0_6CfQAqZqm_mdpQqNSA1wyKW3d0yGPA=",
  },
  {
    name: "Bruccheta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "8 €",
    image:
      "https://img.aktuality.sk/foto/MHgxODo1MTg0eDI5MzEvZml0LWluLzg4MHg0MDAvaW1n/ZTJ4EASaTebUIQKrI5BCzg.jpg?st=zH8LLsPHmZDqFxsVJMZ7dLqIQfXdsb-A-yFI0ZCBfgY&ts=1559563114&e=0",
  },
  {
    name: "Toffife Cake",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ",

    price: "2 €",
    image:
      "https://static.wixstatic.com/media/882d5a_dc5b787142ed445cb5be1f25b835f6ca~mv2.png/v1/fit/w_677%2Ch_550%2Cal_c/file.png",
  },
  {
    name: "Honey soup",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ",
    price: "11 €",
    image: "./soup.png",
  },
  {
    name: "Vegeratian meat",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    price: "7 €",
    image:
      "https://www.veganfoodandliving.com/wp-content/uploads/2018/09/GettyImages-801224958.jpg",
  },
  {
    name: "Cheese pastrami Cheese pastrami are most delicious ",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ",
    price: "25 €",
    image: "https://www.sargento.com/assets/Uploads/Recipe/Image/asffeewq.jpg",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const [mobileSize, setMobileSize] = useState(window.innerWidth < 560);

  const handleNext = () => {
    setIndex(index + 3 >= arrdishes.length ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(
      index - 1 < 0 ? arrdishes.length - (mobileSize ? 1 : 3) : index - 1
    );
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 560) {
        setMobileSize(true);
      } else {
        setMobileSize(false);
      }

    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

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

    if (diff > 5) {
        handlePrev();
    }

    if (diff < -5) {
        handleNext();
    }

    setTouchPosition(null);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <button id="prev" onClick={handlePrev}>
        Prev
      </button>

      {arrdishes.slice(index, index + (mobileSize ? 1 : 3)).map((card, i) => (
        <Card key={i} dish={card} />
      ))}
      <button id="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
