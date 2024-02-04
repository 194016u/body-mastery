import type { Meta, StoryObj } from "@storybook/react";
import { ServiceSection as DefaultServiceSection } from ".";

const meta: Meta<typeof DefaultServiceSection> = {
  component: DefaultServiceSection,
  tags: ["autodocs"],
  title: "Component/organisms/ServiceSection",
};

export default meta;
type Story = StoryObj<typeof DefaultServiceSection>;

export const ServiceSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultServiceSection />
        </div>
      </>
    );
  },
};
