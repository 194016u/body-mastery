import type { Meta, StoryObj } from "@storybook/react";
import { SideImageSection as DefaultSideImageSection } from ".";


const meta: Meta<typeof DefaultSideImageSection> = {
    component: DefaultSideImageSection,
    tags: ["autodocs"],
    title: "Component/organisms/SideImageSection",
  };

  export default meta;
type Story = StoryObj<typeof DefaultSideImageSection>;

export const SideImageSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultSideImageSection />
        </div>
      </>
    );
  },
};