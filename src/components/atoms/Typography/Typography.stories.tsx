import type { Meta, StoryObj } from "@storybook/react";
import { Typography as DefaultTypography } from ".";

type TypographyProps = React.ComponentProps<typeof DefaultTypography> & {
  theme?: string;
};

const meta: Meta<TypographyProps> = {
  component: DefaultTypography,
  tags: ["autodocs"],
  title: "Component/atoms/Typography",
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const Typography: Story = {
  argTypes: {
    variant: {
      options: [
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6",
        "v7",
        "v8",
        "v9",
        "v10",
        "v11",
        "v12",
        "v13",
        "v14",
        "v15",
        "v16",
        "text",
      ],
      control: { type: "radio" },
    },
    font: {
      options: [
        "Birds of Paradise  Personal use",
        "Gilroy",
        "Gilroy-Regular",
        "Nexa",
        "Quicksand",
      ],
      control: { type: "radio" },
    },
    linkColor: {
      options: ["red", "green"],
      control: { type: "radio" },
    },

    theme: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
  args: {
    theme:'light',
    variant:'v1'
  },
  render: function Render(args) {
    return (
      <>
        <div className={`theme-${args.theme}`}>
          <DefaultTypography {...args} />
        </div>
      </>
    );
  },
};
