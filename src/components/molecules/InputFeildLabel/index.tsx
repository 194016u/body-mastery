import { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { InputFeild } from "../../atoms/InputFeild";
import "./index.scss";

interface IProps {
  label: string;
  placeholder: string;
  inputStyle?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const InputFeildLabel = ({
  label,
  placeholder,
  inputStyle,
  value,
  setValue,
}: IProps) => {
  return (
    <div className={classNames("input-feild-label-wrapper")}>
      <div className="input-field-typography">
        <Typography
          label={label}
          font="Quicksand-bold"
          variant="v2"
          color="gunmetalGray"
        />
      </div>
      <div className="input-field">
        <InputFeild
          placeHolder={placeholder}
          value={value}
          onChange={setValue}
          styles={inputStyle}
        />
      </div>
    </div>
  );
};
