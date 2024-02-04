import type { Meta, StoryObj } from "@storybook/react";
import { TextOptionSection as DefaultTextOptionSection } from ".";

const meta: Meta<typeof DefaultTextOptionSection> = {
  component: DefaultTextOptionSection,
  tags: ["autodocs"],
  title: "Component/organisms/TextOptionSection",
};

export default meta;
type Story = StoryObj<typeof DefaultTextOptionSection>;

export const TextOptionSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultTextOptionSection />
        </div>
      </>
    );
  },
};
