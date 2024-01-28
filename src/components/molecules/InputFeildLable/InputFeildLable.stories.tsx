import type { Meta, StoryObj } from "@storybook/react";
import { InputFeildLabel as DefaultInputFeildLabel } from ".";

const meta: Meta<typeof DefaultInputFeildLabel> = {
  component: DefaultInputFeildLabel,
  tags: ["autodocs"],
  title: "Component/molecules/InputFeildLabel",
};

export default meta;
type Story = StoryObj<typeof DefaultInputFeildLabel>;

export const InputFeildLabel: Story = {
  argTypes:{
    label:{
      option:[
        "Name",
        "Phone Number",
        "Email",
      ],
      control:{type:"radio"}
    },
    placeholder:{
      option:[
        "Your Name",
        "Your Phone Number",
        "Your Email",
      ]
    }
  },
    render: function Render(args) {
      return (
        <>
          <div>
            <DefaultInputFeildLabel {...args} />
          </div>
        </>
      );
    },
  };