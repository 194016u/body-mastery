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

Button.argTypes = {
  type: {
    options: [
      "bookAppointment",
      "contactUs",
      "submit",
      "close",
      "leftarrow",
      "rightarrow",
    ],
    control: { type: "radio" },
  },
};
