import type { Meta, StoryObj } from "@storybook/react";
import { Button as DefaultButton } from ".";

const meta: Meta<typeof DefaultButton> = {
  component: DefaultButton,
  tags: ["autodocs"],
  title: "Component/atoms/Button",
};

export default meta;
type Story = StoryObj<typeof DefaultButton>;

export const Button: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultButton {...args} />
        </div>
      </>
    );
  },
};
Button.args = {
  label: "Book Appointment",
  type:'bookAppointment',
};

Button.argTypes = {
  type: {
    options: ["bookAppointment", "contactUs","submit"],
    control: { type: "radio" },
  },
};