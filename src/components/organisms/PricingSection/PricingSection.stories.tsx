import type { Meta, StoryObj } from "@storybook/react";
import { PricingSection as DefaultPricingSection } from ".";

const meta: Meta<typeof DefaultPricingSection> = {
  component: DefaultPricingSection,
  tags: ["autodocs"],
  title: "Component/organisms/PricingSection",
};

export default meta;
type Story = StoryObj<typeof DefaultPricingSection>;

export const PricingSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultPricingSection />
        </div>
      </>
    );
  },
};
