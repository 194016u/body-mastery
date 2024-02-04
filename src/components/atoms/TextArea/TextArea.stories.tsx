import type { Meta, StoryObj } from "@storybook/react";
import { TextArea as DefaultTextArea } from ".";

const meta: Meta<typeof DefaultTextArea> = {
  component: DefaultTextArea,
  tags: ["autodocs"],
  title: "Component/atoms/TextArea",
};

export default meta;
type Story = StoryObj<typeof DefaultTextArea>;

export const TextArea: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultTextArea {...args} />
        </div>
      </>
    );
  },
};
TextArea.args = {
  value: "default",
  placeHolder: "type here..",
};
