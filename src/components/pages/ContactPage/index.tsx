import { useState } from "react";
import classNames from "classnames";
import { NavebarSection } from "../../organisms/NavbarSection";
import { InputFieldSection } from "../../organisms/InputFieldSection";
import { SideImageSection } from "../../organisms/SideImageSection";
import { TextOptionSection } from "../../organisms/TextOptionSection";
import { Footer } from "../../molecules/Footer";
import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";
import "./index.scss";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
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
            <div className="input-fiels-section">
              <InputFieldSection
                name={name}
                email={email}
                mobileNo={mobileNo}
                setName={setName}
                setEmail={setEmail}
                setMobileNo={setMobileNo}
                textArea={textArea}
                setTextArea={setTextArea}
              />
            </div>

            <div className="button-section">
              <div className="text-option-section">
                <TextOptionSection />
              </div>
              <div className="button-section">
                <Button label={"Submit"} type={"submit"} />
              </div>
            </div>
          </div>
          <div className="image-section">
            <SideImageSection />
          </div>
        </div>
      </div>
      <div className="fotter-section">
        <Footer label="Copyright 2023.All Rights Reserved." />
      </div>
    </div>
  );
};
