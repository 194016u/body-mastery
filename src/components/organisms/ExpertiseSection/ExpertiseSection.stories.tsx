import type { Meta, StoryObj } from "@storybook/react";
import { ExpertiseSection as DefaultExpertiseSection } from ".";

const meta: Meta<typeof DefaultExpertiseSection> = {
  component: DefaultExpertiseSection,
  tags: ["autodocs"],
  title: "Component/organisms/ExpertiseSection",
};

export default meta;
type Story = StoryObj<typeof DefaultExpertiseSection>;

export const ExpertiseSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultExpertiseSection />
        </div>
      </>
    );
  },
};
