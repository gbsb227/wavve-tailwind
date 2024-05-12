import { useState } from "react";
import rightarrow from "./../assets/images/right-arrow-100.png";
import leftarrow from "./../assets/images/left-arrow.png";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img src={imageUrls[imageIndex]} className="img-slider-img" />
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        왼쪽
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        오른쪽
      </button>
    </div>
  );
}
