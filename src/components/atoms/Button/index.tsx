import classNames from "classnames";
import './index.scss';

interface IProps {
  label: string;
  type:string;
  onClick?:()=>void;
}

export const Button = ({ label,type,onClick}: IProps) => {
  return (
    <div className={classNames('btn-wrapper')}>
      <button onClick={onClick} className={classNames(type === "bookAppointment" ? "btn" : type === "contactUs" ? "btn-secondary":type==="submit"?"submit": type==="close"?"close":type==="leftarrow"?"leftarrow":"rightarrow")}>{label}</button>
    </div>
  );
};
