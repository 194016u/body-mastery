import React from "react";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import about_us_img from "./../../../assets/pic_01.png"

export const FirstParagraph = () => {
  return (
    <div className="paragraph-section-01-wrapper">
      <div className="left-section">
        <div className="title">
          <Typography
            label="About Us"
            font="Birds-of-Paradise"
            variant="v15"
            color="gunmetalGray"
          />
        </div>
        <div className="description">
          <Typography
            label="At Aesthetic Body Mastery, we offer a suite of advanced, non-invasive treatments tailored to your aesthetic goals. From Fat Freezing and Radio Frequency Skin Tightening for body contouring and skin rejuvenation, to Cellulite Reduction Cupping/Suction Services for smoother skin for you.  Our Hair Blossom Services provide a way to combat graying and promote hair growth.  Overall, we've curated a holistic approach to beauty and self-confidence. With a blend of scientific precision and aesthetic expertise, we at Aesthetic Body Mastery don't just enhance appearances; we sculpt confidence and nurture your journey towards embodying your most radiant self!"
            font="Quicksand-Book"
            variant="v2"
            color="richBlack"
          />
        </div>
      </div>
      <div className="right-section">
        <div className="about-us-pic">
            <img src={about_us_img} alt="about_us_img"/>
      </div>
        
      </div>
    </div>
  );
};
