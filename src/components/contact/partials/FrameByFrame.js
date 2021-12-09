import React, { useState, useEffect } from "react";
import {
  typing1,
  typing2,
  typing3,
  typing4,
  typing5,
  typing6,
  typing7,
  typing8,
  typing9,
  typing10,
  typing11,
  typing12,
  typing13,
  typing14,
} from "../../../assets";

let n = 1;

const FrameByFrame = () => {
  const [currentImage, setCurrentImage] = useState(typing1);

  useEffect(() => {
    const typingImages = {
      1: typing1,
      2: typing2,
      3: typing3,
      4: typing4,
      5: typing5,
      6: typing6,
      7: typing7,
      8: typing8,
      9: typing9,
      10: typing10,
      11: typing11,
      12: typing12,
      13: typing13,
      14: typing14,
    };
    const switchFrames = setInterval(() => {
      n >= 14 ? (n = 1) : n++;
      let nextImg = typingImages[n];
      setCurrentImage(nextImg);
    }, 100);
    return () => {
      clearInterval(switchFrames);
    };
  }, []);

  return (
    <div id="frameByFrameImg">
      <img src={currentImage} alt=""></img>
    </div>
  );
};

export default FrameByFrame;
