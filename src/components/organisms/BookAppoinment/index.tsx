import React, { Dispatch, SetStateAction, useState } from "react";
import { Typography } from "../../atoms/Typography";
import { InputFeild } from "../../atoms/InputFeild";
import { Button } from "../../atoms/Button";
import "./index.scss";

interface IProps {
  service: string;
  sessions: string;
  fullName: string;
  mobileNo: string;
  email: string;
  setService: Dispatch<SetStateAction<string>>;
  setSessions: Dispatch<SetStateAction<string>>;
  setFullName: Dispatch<SetStateAction<string>>;
  setMobileNo: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const BookAppointment = ({
  service,
  sessions,
  fullName,
  mobileNo,
  email,
  setService,
  setSessions,
  setFullName,
  setEmail,
  setMobileNo,
}: IProps) => {
  return (
    <div className="book-appointment-wrapper">
      <div className="book-appointment-title">
        <Typography
          label="Book Your Appointment"
          font="Birds-of-Paradise"
          variant="v10"
          color="richBlack"
        />
      </div>
      <div className="first-input-field-section">
        <div className="input-title">
          <Typography
            label="Choose Your Service"
            font="Quicksand-bold"
            variant="v3"
            color="richBlack"
          />
        </div>
        <div className="input-group">
          <InputFeild
            placeHolder="Hair Blossom Services"
            value={service}
            styles="book-appointment-input-custom-style "
            onChange={setService}
          />
          <InputFeild
            placeHolder="8 sessions"
            value={sessions}
            styles="book-appointment-input-custom-style"
            onChange={setSessions}
          />
        </div>
      </div>
      <div className="second-input-field-section">
        <div className="input-title">
          <Typography
            label="Choose Your Service"
            font="Quicksand-bold"
            variant="v3"
            color="richBlack"
          />
        </div>
        <div className="input-group">
          <InputFeild
            placeHolder="Full Name"
            value={fullName}
            styles="book-appointment-input-custom-style"
            onChange={setFullName}
          />
          <InputFeild
            placeHolder="Phone Number"
            value={mobileNo}
            styles="book-appointment-input-custom-style"
            onChange={setMobileNo}
          />
          <InputFeild
            placeHolder="Email Address"
            value={email}
            styles="book-appointment-input-custom-style"
            onChange={setEmail}
          />
        </div>
      </div>
      <div className="btn-section">
        <Button label="Book Appointment" type="bookAppointment" />
      </div>
    </div>
  );
};
