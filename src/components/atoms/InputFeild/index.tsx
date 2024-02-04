import classNames from "classnames";
import "./index.scss";

interface IProps {
  placeHolder: string;
  value: any;
  styles?: string;
  onChange: (newValue: string) => void;
}

export const InputFeild = ({
  placeHolder,
  value,
  styles,
  onChange,
}: IProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="input-field-wrapper">
      <input
        type="text"
        value={value}
        placeholder={placeHolder}
        className={classNames("input-field", styles && `${styles}`)}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};
