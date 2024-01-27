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
    render: function Render(args) {
      return (
        <>
          <div>
            <DefaultInputFeildLabel />
          </div>
        </>
      );
    },
  };