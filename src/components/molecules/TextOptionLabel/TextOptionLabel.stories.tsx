import type { Meta, StoryObj } from "@storybook/react";
import { TextOptionLabel as DefaultTextOptionLabel } from ".";

const meta: Meta<typeof DefaultTextOptionLabel> = {
  component: DefaultTextOptionLabel,
  tags: ["autodocs"],
  title: "Component/molecules/TextOptionLabel",
};

export default meta;
type Story = StoryObj<typeof DefaultTextOptionLabel>;

export const TextOptionLabel: Story = {
  argTypes:{
    label:{
      option:[
        "Pricing",
        "Booking",
        "Cancellation",
        "Other"
      ],
      control:{type:"radio"}
    }
  },
  render: function Render(args) {
   
    return (
      <>
        <div>
          <DefaultTextOptionLabel {...args}/>
        </div>
      </>
    );
  },
};
