import React from "react";
import { Typography } from "../../atoms/Typography";
import { Pricing } from "../../molecules/Pricing";
import "./index.scss";

export const PricingSection = () => {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-section">
        <div className="pricing-topic">
          <Typography
            label="Pricing"
            font="Birds-of-Paradise"
            variant="v14"
            color="gunmetalGray"
          />
        </div>
        <Pricing
          label={"Cellulite Reduction Cupping/Suction Services"}
          paragraph={
            "Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"
          }
        />

        <Pricing
          label={"Skin Tightening Radio Frequency Services"}
          paragraph={
            "Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"
          }
        />

        <Pricing
          label={"Fat Freezing Cool Sculpting Services"}
          paragraph={
            "Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"
          }
        />

        <Pricing
          label={"Hair Blossom Services"}
          paragraph={
            "Please use contact us link to fill out the form so we can text you current pricing. You can STOP messaging at anytime by using the text STOP. We will need email to send you forms needed for appointment. You can unsubscribe at any time. We only send our intro email to you. We do not send out email blasts like other companies"
          }
        />
      </div>
      <div className="pricing-section-02">
        <Typography
          label="$60 / 4 sessions.  Total $240"
          font="Quicksand"
          variant="v6"
          color="gunmetalGray"
        />
        <Typography
          label="$55 / 8 sessions.  Total $440"
          font="Quicksand"
          variant="v6"
          color="gunmetalGray"
        />
        <Typography
          label="$50 /12 sessions.  Total $600"
          font="Quicksand"
          variant="v6"
          color="gunmetalGray"
        />
        <Typography
          label="$45 /16 sessions.  Total $720"
          font="Quicksand"
          variant="v6"
          color="gunmetalGray"
        />
      </div>
    </div>
  );
};
