import type { Meta, StoryObj } from "@storybook/react";
import { BanerSection as DefaultBanerSection } from ".";


const meta: Meta<typeof DefaultBanerSection> = {
    component: DefaultBanerSection,
    tags: ["autodocs"],
    title: "Component/organisms/BanerSection",
  };

  export default meta;
type Story = StoryObj<typeof DefaultBanerSection>;

export const SideImageSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultBanerSection />
        </div>
      </>
    );
  },
};