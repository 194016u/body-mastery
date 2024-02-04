import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import { InputFeildLabel } from "../../molecules/InputFeildLabel";
import { TextAreaLabel } from "../../molecules/TextAreaLabel";
import "./index.scss";

interface IProps {
  name: string;
  mobileNo: string;
  email: string;
  textArea: string;
  setName: Dispatch<SetStateAction<string>>;
  setMobileNo: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setTextArea: Dispatch<SetStateAction<string>>;
}

export const InputFieldSection = ({
  name,
  email,
  mobileNo,
  setEmail,
  setName,
  setMobileNo,
  textArea,
  setTextArea,
}: IProps) => {
  return (
    <div className={classNames("input-feild-section-wrapper")}>
      <InputFeildLabel
        label="Name"
        placeholder="Your Name"
        inputStyle="contact-us-custom-input-field"
        value={name}
        setValue={setName}
      />
      <InputFeildLabel
        label="Phone Number"
        placeholder="Your Phone Number"
        inputStyle="contact-us-custom-input-field"
        value={mobileNo}
        setValue={setMobileNo}
      />
      <InputFeildLabel
        label="Email"
        placeholder="Your Email"
        inputStyle="contact-us-custom-input-field"
        value={email}
        setValue={setEmail}
      />
      <TextAreaLabel value={textArea} setValue={setTextArea} />
    </div>
  );
};
