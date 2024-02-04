import classNames from "classnames";
import { InputFeildLabel } from "../../molecules/InputFeildLabel";
import {TextAreaLabel} from "../../molecules/TextAreaLabel";
import "./index.scss"; 

export const AppointmentInputSection = ()=>{

    return(
        <div className={classNames("Appointment-input-section-wrapper")}>
            {/* <InputFeildLabel label={"Chose Your Service"} placeholder={"Hair Blossom Services"}/>
            <InputFeildLabel label={""} placeholder={"8 sessions"}/>
            <InputFeildLabel label={"Contact Information"} placeholder={"Full Name"}/>
            <InputFeildLabel label={" "} placeholder={"Phone Number"}/>
            <InputFeildLabel label={" "} placeholder={"Email Address"}/> */}
            

        </div>
    );
};