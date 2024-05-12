import React from "react";
import car1 from "./../assets/imgs/10-1200x800.jpeg";
import car2 from "./../assets/imgs/1016-1200x800.jpeg";
import car3 from "./../assets/imgs/184-1200x800.jpeg";
import car4 from "./../assets/imgs/794-1200x800.jpeg";
import car5 from "./../assets/imgs/353-1200x800.jpeg";
import { ImageSlider } from "./ImageSlider";
import "./image-slider.css";
import { ImageSlider2 } from "./ImageSlider2";

const IMAGES = [car1, car2, car3, car4, car5];

function Slider2() {
  return (
    <div
      style={{
        maxWidth: "1280px",
        width: "100%",
        aspectRatio: "7/3",
        margin: "0 auto",
      }}
    >
      <ImageSlider2 imageUrls={IMAGES} />
    </div>
  );
}

export default Slider2;
