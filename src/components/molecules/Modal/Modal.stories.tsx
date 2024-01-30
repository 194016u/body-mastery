import { Meta, StoryObj } from "@storybook/react";
import modal1 from "./../../../assets/model_1.png";
import close from "./../../../assets/close.svg";
import { Modal as DefaultModal } from ".";
import { useState } from "react";
import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";
import classNames from "classnames";
import "../Modal/modal.scss";

const meta: Meta = {
  component: DefaultModal,
  title: "Component/molecules/Modal",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DefaultModal>;

export const Modal: Story = {
  render: function Render(args) {
    const [toggleModal, setToggleModal] = useState(false);

    return (
      <>
        <Button
          type=""
          label="Open modal"
          onClick={() => setToggleModal((prev) => !prev)}
        />
        <DefaultModal
          isOpen={toggleModal}
          onClose={() => setToggleModal(false)}
        >
          <div className="close-image">
            <img src={close} alt="close1" />
          </div>
          <div className={classNames("modal-sample-wrapper")}>
            <img className="model-image" src={modal1} alt="modal1" />
            <Typography
              color="gunmetalGray"
              font="Gilroy-Regular"
              label="Thank You For Reaching Out."
              variant="v9"
            />
            <div className={classNames("modal-sample-body-wrapper")}></div>
          </div>
        </DefaultModal>
      </>
    );
  },
};
