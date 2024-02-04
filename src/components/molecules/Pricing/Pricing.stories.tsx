import type { Meta, StoryObj } from "@storybook/react";
import { Pricing as DefaultPricing } from ".";

const meta: Meta<typeof DefaultPricing> = {
  component: DefaultPricing,
  tags: ["autodocs"],
  title: "Component/molecules/Pricing",
};

export default meta;
type Story = StoryObj<typeof DefaultPricing>;

export const Pricing: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultPricing {...args} />
        </div>
      </>
    );
  },
};

Pricing.args = {
  label: "dafault label",
  paragraph: "dafault paragraph",
};
