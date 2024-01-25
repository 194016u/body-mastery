import type { Meta, StoryObj } from "@storybook/react";
import { SelectOption as DefaultSelectionOption } from ".";

const meta: Meta<typeof DefaultSelectionOption> = {
  component: DefaultSelectionOption,
  tags: ["autodocs"],
  title: "Component/atoms/SelectOption",
};

export default meta;
type Story = StoryObj<typeof DefaultSelectionOption>;

export const SelectOption: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultSelectionOption {...args} />
        </div>
      </>
    );
  },
};

SelectOption.args={
    type:"radio",
}

SelectOption.argTypes = {
  type: {
    options: ["checkbox", "radio"],
    control: { type: "radio" },
  },
};
