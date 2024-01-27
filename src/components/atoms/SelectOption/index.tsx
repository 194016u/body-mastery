import classNames from "classnames";
import "./index.scss";

interface IProps {
  styles?: string;
}

export const SelectOption = ({ styles }: IProps) => {
  return (
    <div className="select-option-body">
      <div className="wrapper">
        <div
          className={classNames("non-customize-bg", {
            [`${styles}`]: styles,
          })}
        >
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};
