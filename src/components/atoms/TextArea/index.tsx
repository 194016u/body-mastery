import { Dispatch, SetStateAction, ChangeEvent } from "react";
import classNames from "classnames";
import "./index.scss";

interface IProps {
  placeHolder: string;
  value: any;
  onChange: (newValue: string) => void;
  styles?: string;
}

export const TextArea = ({ placeHolder, value, styles, onChange }: IProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <textarea
        value={value}
        placeholder={placeHolder}
        className={classNames("textarea-field", styles && `${styles}`)}
        onChange={handleInputChange}
      />
    </div>
  );
};
