import type { Meta, StoryObj } from "@storybook/react";
import { NavebarSection as DefaultNavbarSection } from ".";

const meta: Meta<typeof DefaultNavbarSection> = {
  component: DefaultNavbarSection,
  tags: ["autodocs"],
  title: "Component/organisms/NavbarSection",
};

export default meta;
type Story = StoryObj<typeof DefaultNavbarSection>;

export const NavbarSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultNavbarSection />
        </div>
      </>
    );
  },
};
