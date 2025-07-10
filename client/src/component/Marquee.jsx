import React from "react";
import "../css/Marquee.css";
import mq1 from "../images/mq1.png"
import mq2 from "../images/mq2.png"
import mq3 from "../images/mq3.png"
import mq4 from "../images/mq4.png"
import mq5 from "../images/mq5.png"
import mq6 from "../images/mq6.png"


const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-content">
          <img src={mq1} alt="INAMORE" />
          <img src={mq2} alt="MABLE" />
          <img src={mq3} alt="PARTCH" />
          <img src={mq4} alt="Ruelala" />
          <img src={mq5} alt="SMKFLWR" />
          <img src={mq6} alt="SSENSE" />

          {/* Duplicate for seamless loop */}
          <img src={mq1} alt="INAMORE" />
          <img src={mq2} alt="MABLE" />
          <img src={mq3} alt="PARTCH" />
          <img src={mq4} alt="Ruelala" />
          <img src={mq5} alt="SMKFLWR" />
          <img src={mq6} alt="SSENSE" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
