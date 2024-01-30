import type { Meta, StoryObj } from "@storybook/react";
import { Chapter as DefaultChapter } from ".";

const meta: Meta<typeof DefaultChapter> = {
  component: DefaultChapter,
  tags: ["autodocs"],
  title: "Component/molecules/Chapter",
};

export default meta;
type Story = StoryObj<typeof DefaultChapter>;

export const Chapter: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultChapter {...args} />
        </div>
      </>
    );
  },
};

Chapter.args={
    label:"dafault label",
    paragraph:"dafault paragraph"
}
