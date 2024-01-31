import React from "react";
import { Typography } from "../../atoms/Typography";
import "./index.scss";
import { Pricing } from "../../molecules/Pricing";




export const PricingSection = () => {
    return (
        <div className="praicing-section-wrapper">
            <div className="pricing-title">
                <Typography
                  label="Pricing"
                  font="Birds-of-Paradise"
                  variant="v14"
                  color="gunmetalGray"
          />
            </div>
            <Pricing label={"Cellulite Reduction Cupping/Suction Services"} paragraph={"Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"}/>
            <Pricing label={"Skin Tightening Radio Frequency Services"} paragraph={"Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"}/>
            <Pricing label={"Fat Freezing Cool Sculpting Services"} paragraph={"Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"}/>
            <Pricing label={"Hair Blossom Services"} paragraph={"Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"}/>

        </div>
    )
}