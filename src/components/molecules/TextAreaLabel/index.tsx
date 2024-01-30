import classNames from "classnames";
import { Typography } from "../../atoms/Typography";
import { TextArea } from "../../atoms/TextArea";
import "./index.scss";
import { useState } from "react";



export const TextAreaLabel = () => {

  const [value, setValue] = useState<string | null>('');


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
        <TextArea placeHolder="Your Message" value={value}/>
      </div>
    </div>
  );
};
