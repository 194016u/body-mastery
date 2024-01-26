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
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "text",
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
    variant:'h1'
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
