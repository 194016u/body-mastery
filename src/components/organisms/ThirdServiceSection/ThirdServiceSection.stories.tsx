import type { Meta, StoryObj } from "@storybook/react";
import { ThirdServiceSection as DefaultThirdServiceSection } from ".";


const meta: Meta<typeof DefaultThirdServiceSection> = {
    component: DefaultThirdServiceSection,
    tags: ["autodocs"],
    title: "Component/organisms/ThirdServiceSection",
  };

  export default meta;
type Story = StoryObj<typeof DefaultThirdServiceSection>;

export const ThirdServiceSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultThirdServiceSection />
        </div>
      </>
    );
  },
};