import { useState } from "react";
import classNames from "classnames";
import { Button } from "../../atoms/Button";
import { Modal } from "../../molecules/Modal";
import { AppointmentBookAllSection } from "../AppoinmentBookAllSection";
import "./index.scss";

export const NavebarSection = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const ContactUsModelToggler = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <>
      <div className={classNames("navbar-section-wrapper")}>
        <Button
          label={"Book Appointment"}
          type={"bookAppointment"}
          onClick={ContactUsModelToggler}
        />
        <Button label={"Contact Us"} type={"contactUs"} />
      </div>

      <Modal isOpen={toggleModal} onClose={() => setToggleModal(false)}>
        <div className={classNames("modal-sample-wrapper")}>
          <div className={classNames("modal-sample-body-wrapper")}>
            <AppointmentBookAllSection />
          </div>
        </div>
      </Modal>
    </>
  );
};
