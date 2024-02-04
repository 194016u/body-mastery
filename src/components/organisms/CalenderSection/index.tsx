import React from "react";
import { Calender } from "../../molecules/Calender";
import { Typography } from "../../atoms/Typography";
import "./index.scss";

export const CalenderSection = () => {
  return (
    <div className="calender-section-wrapper">
      <div className="calender-title-section">
        <Typography
          label="Select Appointment"
          font="Quicksand-bold"
          variant="v2"
          color="richBlack"
        />
        <div className="calender-title-right-section">
          <Typography
            label="Milwaukee, WI"
            font="Quicksand-Book"
            variant="v1"
            color="richBlack"
          />
        </div>
      </div>
      <div className="middle-calender-section">
        <Calender />
      </div>
      <div className="calender-price-section">
        <Typography
          label="Price:"
          font="Quicksand-bold"
          variant="v4"
          color="tumbleweed"
        />
        <Typography
          label="$55 / 8 sessions.  Total $440"
          font="Quicksand-Book"
          variant="v2"
          color="richBlack"
        />
      </div>
    </div>
  );
};
