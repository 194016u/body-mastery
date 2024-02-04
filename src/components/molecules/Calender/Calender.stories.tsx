import type { Meta, StoryObj } from "@storybook/react";
import { Calender as DefaultCalender } from ".";
import "react-calendar/dist/Calendar.css";

const meta: Meta<typeof DefaultCalender> = {
  component: DefaultCalender,
  tags: ["DefaultCalender"],
  title: "Component/molecules/Calender",
};

export default meta;
type Story = StoryObj<typeof DefaultCalender>;

export const Calender: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultCalender />
        </div>
      </>
    );
  },
};
