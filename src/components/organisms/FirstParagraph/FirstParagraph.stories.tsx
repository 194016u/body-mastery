import type { Meta, StoryObj } from "@storybook/react";
import { FirstParagraph as DefaultFirstParagraph } from ".";


const meta: Meta<typeof DefaultFirstParagraph> = {
    component: DefaultFirstParagraph,
    tags: ["autodocs"],
    title: "Component/organisms/FirstParagraph",
  };

  export default meta;
type Story = StoryObj<typeof DefaultFirstParagraph>;

export const FirstParagraph: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultFirstParagraph />
        </div>
      </>
    );
  },
};