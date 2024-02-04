import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaLabel as DefaultTextAreaLabel } from ".";

const meta: Meta<typeof DefaultTextAreaLabel> = {
  component: DefaultTextAreaLabel,
  tags: ["autodocs"],
  title: "Component/molecules/TextAreaLabel",
};

export default meta;
type Story = StoryObj<typeof DefaultTextAreaLabel>;

export const TextAreaLabel: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultTextAreaLabel {...args} />
        </div>
      </>
    );
  },
};

TextAreaLabel.args = {
  value: "default",
};
