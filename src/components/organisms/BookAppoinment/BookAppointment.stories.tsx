import type { Meta, StoryObj } from "@storybook/react";
import { BookAppointment as DefaultBookAppointment } from ".";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const meta: Meta<typeof DefaultBookAppointment> = {
  component: DefaultBookAppointment,
  tags: ["DefaultCalender"],
  title: "Component/organisms/BookAppointment",
};

export default meta;
type Story = StoryObj<typeof DefaultBookAppointment>;

export const BookAppointment: Story = {
  render: function Render(args) {
    const [service, setService] = useState("");
    const [sessions, setSessions] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");

    return (
      <>
        <div>
          <DefaultBookAppointment
            {...args}
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
      </>
    );
  },
};

BookAppointment.args = {
  service: "string",
  sessions: "string",
  fullName: "string",
  mobileNo: "string",
  email: "string",
};
