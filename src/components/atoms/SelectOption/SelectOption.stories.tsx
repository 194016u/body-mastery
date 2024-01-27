import type { Meta, StoryObj } from "@storybook/react";
import { SelectOption as DefaultSelectOption } from ".";

type TextOptionProps = React.ComponentProps<typeof DefaultSelectOption> & {
  theme?: string;
};

const meta: Meta<TextOptionProps> = {
  component: DefaultSelectOption,
  tags: ["autodocs"],
  title: "Component/atoms/TextOption",
};

export default meta;
type Story = StoryObj<TextOptionProps>;

export const SelectOption: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultSelectOption />
        </div>
      </>
    );
  },
};
