import classNames from "classnames";
import { NavebarSection } from "../../organisms/NavbarSection";
import { Footer } from "../../molecules/Footer";
import "./index.scss";

export const AestheticBodyPAge = ( ) => {
    return(
        <div className={classNames("Aesthetic-Body-page-wrapper")}>
      <div className="aesthetic-navbar-section">
        <NavebarSection />
      </div>
      <div className="aesthetic-baner-section">

      </div>
      <div className="aesthetic-aboutus-section">

      </div>

      <div className="service-section">

      </div>
      <div className="hair-blossom-section">

      </div>
      <div className="cellulite-reduction-cupping-section">

      </div>
      <div className="choose-section">

      </div>
      <div className="image-section">

      </div>
      <div className="pricing-section">

      </div>
      <div className="Testimonials-section">

      </div>
      <div className="aesthetic-fotter-section">
        <Footer/>
      </div>
      </div>
    );
};