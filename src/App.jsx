import React, { useState } from "react";
import "./App.css";
import image from "./Image 1.jpeg";
import image2 from "./Image2.jpeg";
import rightArrow from "./right-arrow-backup-2 (1).svg";
import leftArrow from "./left-arrow-new.svg";
import playIcon from "./play (1).svg";
import zoomIcon from "./zoom (1).svg";

function App() {

  //this code image selection code is from ChatGpt
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image, image2];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleLeftArrowClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="slider">
        <div className="slide">
          <div className="leftArrow" onClick={handleLeftArrowClick}>
            <img
              src={leftArrow}
              alt="leftArrow arrow"
              width={50}
              height={50}
            ></img>
          </div>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            width={50}
            height={50}
          ></img>
          <div className="rightArrow" onClick={handleRightArrowClick}>
            <img
              src={rightArrow}
              alt="rightArrow arrow"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="dots-container">
            {images.map((_, index) => (
              <div
                key={index}
                className={index === currentImageIndex ? "dot" : "transparentDot"}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="playIconContainer">
          <img
            src={playIcon}
            alt="play white icon"
            width={50}
            height={50}
          ></img>
        </div>
        <div className="zoomIconContainer">
          <img
            src={zoomIcon}
            alt="zoom white icon"
            width={50}
            height={50}
          ></img>
        </div>
        <div className="slideShow">
          {images.map((imageSrc, index) => (
            <div key={index} className="slideShowImage">
              <img
                src={imageSrc}
                alt={`Image ${index + 1}`}
                width={100}
                height={60}
                onClick={() => setCurrentImageIndex(index)}
                className={index === currentImageIndex ? "selected" : "slideShowImageMargin"}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
