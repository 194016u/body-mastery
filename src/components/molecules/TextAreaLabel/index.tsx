import { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { TextArea } from "../../atoms/TextArea";
import "./index.scss";

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const TextAreaLabel = ({ value, setValue }: IProps) => {
  return (
    <div className={classNames("text-area-label-wrapper")}>
      <div className="text-area-typography">
        <Typography
          label="Message"
          font="Quicksand-bold"
          variant="v2"
          color="gunmetalGray"
        />
      </div>
      <div className="text-area">
        <TextArea
          placeHolder="Your Message"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
