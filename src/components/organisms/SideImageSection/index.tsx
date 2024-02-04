import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import image1 from "./../../../assets/img_1.png";
import image2 from "./../../../assets/img_2.png";
import "./index.scss";

export const SideImageSection = () => {
  return (
    <div className={classNames("side-image-section-wrapper")}>
      <div className="image-container">
        <img src={image1} alt="image1" />
        <div className="typography-section">
          <Typography
            label="Sculpting dreams. Mastering realities."
            font="Birds-of-Paradise"
            variant="v12"
            color="gunmetalGray"
          />
        </div>
        <img src={image2} alt="image2" />
      </div>
    </div>
  );
};
