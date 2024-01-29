import type { Meta, StoryObj } from "@storybook/react";
import { InputFeildSection as DefaultInputFeildSection } from ".";


const meta: Meta<typeof DefaultInputFeildSection> = {
    component: DefaultInputFeildSection,
    tags: ["autodocs"],
    title: "Component/organisms/InputFeildSection",
  };

  export default meta;
type Story = StoryObj<typeof DefaultInputFeildSection>;

export const InputFeildSection: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultInputFeildSection />
        </div>
      </>
    );
  },
};