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
        "Birds-of-Paradise",
        "Gilroy-light",
        "Gilroy-Regular",
        "Nexa",
        "Quicksand",
      ],
      control: { type: "radio" },
    },
    color: {
      options: [
        "gunmetalGray",
        "grayish",
        "cottonCandyPink",
        "richBlack",
        "white",
        "paleGreen",
        "paleMagenta",
        "alabaster",
        "gradientpinks",
        "deepLilac",
        "tumbleweed",
        "goldenrod",
        "black",
        "purpleMountainMajesty",
        "russianViolet",
      ],
      control: { type: "radio" },
    },
  },
  args: {
    label: "Typography",
    variant: "v1",
    font: "Birds-of-Paradise",
    color: "cottonCandyPink",
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
