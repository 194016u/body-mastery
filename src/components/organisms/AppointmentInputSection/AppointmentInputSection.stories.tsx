import type { Meta, StoryObj } from "@storybook/react";
import { AppointmentInputSection as DefaultAppointmentInputSection } from ".";

const meta: Meta<typeof DefaultAppointmentInputSection> = {
  component: DefaultAppointmentInputSection,
  tags: ["autodocs"],
  title: "Component/organisms/AppointmentInputSection",
};

export default meta;
type Story = StoryObj<typeof DefaultAppointmentInputSection>;

export const AppointmentInputSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultAppointmentInputSection />
        </div>
      </>
    );
  },
};
