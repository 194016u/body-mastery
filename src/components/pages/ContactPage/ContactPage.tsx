import classNames from "classnames";
import { NavebarSection } from "../../organisms/NavbarSection";
import { InputFeildSection } from "../../organisms/InputFeildSection";
import { SideImageSection } from "../../organisms/SideImageSection";
import { Footer } from "../../molecules/Footer";
import "./index.scss";
import { Typography } from "../../atoms/Typography";
import { TextOptionSection } from "../../organisms/TextOptionSection";
import { Button } from "../../atoms/Button";

export const ContactPage = () => {
  return (
    <div className={classNames("contact-page-wrapper")}>
      <div className="navbar-section">
        <NavebarSection />
      </div>
      <div className="contact-body-section">
        <div className="contact-form-section">
          <div className="contact-input-feild-section">
          
          <Typography
            label="Contact"
            font="Quicksand"
            variant="v13"
            color="gunmetalGray"
            span="Us"
            spanStyle="span-style"
          />
            <InputFeildSection />

            <div className="button-section">
            <div className="text-option-section">
            <TextOptionSection />
            </div>
            <div className="button-section">
            <Button label={"Submit"} type={"submit"}/>
            </div>
            </div>
          </div>
          <div className="image-section">
            <SideImageSection />
          </div>
        </div>
      </div>
      <div className="fotter-section">
        <Footer/>
      </div>
    </div>
  );
};
