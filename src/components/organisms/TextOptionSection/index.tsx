import classNames from "classnames";
import { TextOptionLabel } from "../../molecules/TextOptionLabel";
import "./index.scss";

export const TextOptionSection = ()=>{
    
    return(
        <div className={classNames("text-option-section-wrapper")}>
        <TextOptionLabel lable={"Pricing"}/>
        <TextOptionLabel lable={"Booking"}/>
        <TextOptionLabel lable={"Cancellation"}/>
        <TextOptionLabel lable={"Other"}/>

        </div>
    );
};