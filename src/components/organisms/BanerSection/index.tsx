import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import image01 from "./../../../assets/image01.png";
import image02 from "./../../../assets/image02.png";
import image03 from "./../../../assets/image03.png";
import image04 from "./../../../assets/image04.png";
import "./index.scss";

export const BanerSection = () => {
  return (
    <div className="baner-section-wrapper ">
      <div className="up-both-image">
        <div className="img-01">
          <img src={image01} alt="image01" />
        </div>
        <div className="img-02">
          <img src={image02} alt="image02" />
        </div>
      </div>

      <div className="main-title">
        <div className="first-typography-section">
          <Typography
            label="Aesthetic Body Mastery"
            font="Birds-of-Paradise"
            variant="v12"
            color="deepLilac"
          />
        </div>
        <div className="second-typography-section">
          <Typography
            label="Sculpting Dreams, Mastering Realities"
            font="Birds-of-Paradise"
            variant="v6"
            color="deepLilac"
          />
        </div>
      </div>
      <div className="bottom-both-image">
        <div className="img-03">
          <img src={image03} alt="image03" />
        </div>
        <div className="img-04">
          <img src={image04} alt="image04" />
        </div>
      </div>
    </div>
  );
};
