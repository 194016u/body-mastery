import classNames from "classnames";
import { NavebarSection } from "../../organisms/NavbarSection";
import { BanerSection } from "../../organisms/BanerSection";
import { FirstParagraph } from "../../organisms/FirstParagraph";
import { ServiceSection } from "../../organisms/ServiceSection";
import { SecondServiceSection } from "../../organisms/SecondServiceSection";
import { ThirdServiceSection } from "../../organisms/ThirdServiceSection";
import { ExpertiseSection } from "../../organisms/ExpertiseSection";
import { PricingSection } from "../../organisms/PricingSection";
import beforeAfterImage from "./../../../assets/before-after.png";
import { CardSection } from "../../organisms/CardSection";
import { Footer } from "../../molecules/Footer";
import "./index.scss";

export const AestheticBodyPage = () => {
  return (
    <div className={classNames("Aesthetic-Body-page-wrapper")}>
      <div className="aesthetic-navbar-section">
        <NavebarSection />
      </div>
      <div className="aesthetic-baner-section">
        <BanerSection />
      </div>
      <div className="aesthetic-about-us-section">
        <FirstParagraph />
      </div>

      <div className="service-section">
        <ServiceSection />
      </div>
      <div className="hair-blossom-section">
        <SecondServiceSection />
      </div>
      <div className="cellulite-reduction-cupping-section">
        <ThirdServiceSection />
      </div>
      <div className="choose-section">
        <ExpertiseSection />
      </div>
      <div className="before-after-image-section">
        <img src={beforeAfterImage} alt="before-after" />
      </div>
      <div className="page-pricing-section">
        <PricingSection />
      </div>
      <div className="Testimonials-section">
        <CardSection />
      </div>
      <div className="aesthetic-fotter-section">
        <Footer label="Aesthetic Body Mastery,LLC 2020. Terms Of Use   Privacy Policy" />
      </div>
    </div>
  );
};
