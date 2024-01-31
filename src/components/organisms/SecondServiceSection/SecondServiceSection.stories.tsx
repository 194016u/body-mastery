import type { Meta, StoryObj } from "@storybook/react";
import { SecondServiceSection as DefaultSecondServiceSection } from ".";


const meta: Meta<typeof DefaultSecondServiceSection> = {
    component: DefaultSecondServiceSection,
    tags: ["autodocs"],
    title: "Component/organisms/SecondServiceSection",
  };

  export default meta;
type Story = StoryObj<typeof DefaultSecondServiceSection>;

export const SecondServiceSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultSecondServiceSection />
        </div>
      </>
    );
  },
};