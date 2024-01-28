import classNames from "classnames";
import './index.scss';

interface IProps{
    placeHolder:string;
    value:any;
    styles?:string;
}

export const InputFeild = ({placeHolder,value,styles}: IProps)=> {
  return (
    <div>
       <input type="text" value={value} placeholder={placeHolder} className={classNames('input-field',styles && `${styles}`)} />

    </div>
  )
}
