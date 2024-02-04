import React, { useState } from "react";
import { CalenderSection } from "../CalenderSection";
import { BookAppointment } from "../BookAppoinment";
import "./index.scss";

export const AppointmentBookAllSection = () => {
  const [service, setService] = useState("");
  const [sessions, setSessions] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="contact-us-modal">
      <div className="book-appointment-left-side">
        <CalenderSection />
      </div>
      <div className="book-appointment-right-side">
        <BookAppointment
          service={service}
          sessions={sessions}
          fullName={fullName}
          mobileNo={mobileNo}
          email={email}
          setService={setService}
          setSessions={setSessions}
          setFullName={setFullName}
          setMobileNo={setMobileNo}
          setEmail={setEmail}
        />
      </div>
    </div>
  );
};
