
import type { Meta, StoryObj } from "@storybook/react";
import { CardSection as DefaultCardSection } from ".";


const meta: Meta<typeof DefaultCardSection> = {
    component: DefaultCardSection,
    tags: ["autodocs"],
    title: "Component/organisms/CardSection",
  };

  export default meta;
type Story = StoryObj<typeof DefaultCardSection>;

export const CardSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultCardSection />
        </div>
      </>
    );
  },
};