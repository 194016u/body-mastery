import type { Meta, StoryObj } from "@storybook/react";
import { AppointmentBookAllSection as DefaultAppointmentBookAllSection } from ".";
import "react-calendar/dist/Calendar.css";

const meta: Meta<typeof DefaultAppointmentBookAllSection> = {
  component: DefaultAppointmentBookAllSection,
  tags: ["DefaultAppointmentBookAllSection"],
  title: "Component/organisms/AppointmentBookAllSection",
};

export default meta;
type Story = StoryObj<typeof DefaultAppointmentBookAllSection>;

export const AppointmentBookAllSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultAppointmentBookAllSection />
        </div>
      </>
    );
  },
};
