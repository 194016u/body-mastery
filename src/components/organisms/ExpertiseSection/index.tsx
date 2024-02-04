import { Typography } from "../../atoms/Typography";
import expertist_img from "./../../../assets/expertist.png";
import "./index.scss";

export const ExpertiseSection = () => {
  return (
    <div className="expertise-section-wrapper">
      <div className="expertise-left-section">
        <div className="expertise-title">
          <Typography
            label="Why Choose Our Expertise?"
            font="Birds-of-Paradise"
            variant="v10"
            color="gunmetalGray"
          />
        </div>
        <div className="expertise-description">
          <Typography
            label="We provide material for you to read & follow that you will take home that is important to follow for each service, in particular the Fat Freezing Services. Post-treatment, we can provide additional consulting and coaching services to continue to guide you & accelerate your results. This combined will provide further confidence to put you in a solid position to cement better results and faster enhancement of your natural beauty. We never leave our clients hanging. Our commitment to client satisfaction extends beyond the treatment, offering a variety of support tailored to your desires and personality, as per your preference and requirement."
            font="Quicksand-Book"
            variant="v2"
            color="richBlack"
          />
        </div>
      </div>
      <div className="expertise-right-section">
        <div className="service-image02">
          <img src={expertist_img} alt="sexpertist_img" />
        </div>
      </div>
    </div>
  );
};
