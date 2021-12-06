import React, { useState, useEffect } from "react";
import typing1 from "../../assets/framebyframe/typing1.PNG";
import typing2 from "../../assets/framebyframe/typing2.PNG";
import typing3 from "../../assets/framebyframe/typing3.PNG";
import typing4 from "../../assets/framebyframe/typing4.PNG";
import typing5 from "../../assets/framebyframe/typing5.PNG";
import typing6 from "../../assets/framebyframe/typing6.PNG";
import typing7 from "../../assets/framebyframe/typing7.PNG";
import typing8 from "../../assets/framebyframe/typing8.PNG";
import typing9 from "../../assets/framebyframe/typing9.PNG";
import typing10 from "../../assets/framebyframe/typing10.PNG";
import typing11 from "../../assets/framebyframe/typing11.PNG";
import typing12 from "../../assets/framebyframe/typing12.PNG";
import typing13 from "../../assets/framebyframe/typing13.PNG";
import typing14 from "../../assets/framebyframe/typing14.PNG";
import { useAppContext } from "../../context/AppContext";

const FrameByFrame = () => {

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
  const [currentImage, setCurrentImage] = useState(typing1);

  const switchFrames = () => {
    let n = 1;
    setInterval(() => {
      n >= 14 ? (n = 1) : n++;
      let nextImg = typingImages[n];
      setCurrentImage(nextImg);
    }, 100);
    // clearInterval();
  };

  useEffect(() => {
    switchFrames();
  }, []);

  
    return (
      <div>
        <img src={currentImage} id="frameByFrameImg"></img>
        
      </div>
    )
  }
  
  export default FrameByFrame
  