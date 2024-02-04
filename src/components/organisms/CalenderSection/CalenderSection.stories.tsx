import type { Meta, StoryObj } from "@storybook/react";
import { CalenderSection as DefaultCalenderSection } from ".";
import "react-calendar/dist/Calendar.css";

const meta: Meta<typeof DefaultCalenderSection> = {
  component: DefaultCalenderSection,
  tags: ["DefaultCalender"],
  title: "Component/organisms/CalenderSection",
};

export default meta;
type Story = StoryObj<typeof DefaultCalenderSection>;

export const CalenderSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultCalenderSection />
        </div>
      </>
    );
  },
};
