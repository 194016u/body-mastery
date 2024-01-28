import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { InputFeild } from "../../atoms/InputFeild";
import "./index.scss";
import { useState } from "react";

interface IProps{
  label:"Name"|"Phone Number"|"Email";
  placeholder:"Your Name"|"Your Phone Number"|"Your Email";
}

export const InputFeildLabel = ({label,placeholder}:IProps) => {

  const [value, setValue] = useState<string | null>('');

    return (
      <div className={classNames("input-feild-label-wrapper")}>
        <div className="typography">
          <Typography
            label={label}
            font="Quicksand"
            variant="v2"
            color="gunmetalGray"
          />
        </div>
        <div className="input-field">
          <InputFeild placeHolder={placeholder} value={value}/>
        </div>
      </div>
    );
  };