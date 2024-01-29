import classNames from "classnames";
import { Button } from "../../atoms/Button";
import "./index.scss"; 

export const NavebarSection = ()=>{

    return(
        <div className={classNames("navbar-section-wrapper")}>
            <Button label={"Book Appointment"} type={"bookAppointment"}/>
            <Button label={"Contact Us"} type={"contactUs"}/>

        </div>
    );

};