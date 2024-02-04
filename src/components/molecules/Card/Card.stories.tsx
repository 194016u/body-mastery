import type { Meta, StoryObj } from "@storybook/react";
import { Card as DefaultCard } from ".";

const meta: Meta<typeof DefaultCard> = {
  component: DefaultCard,
  tags: ["autodocs"],
  title: "Component/molecules/Card",
};

export default meta;
type Story = StoryObj<typeof DefaultCard>;

export const Card: Story = {
  render: function Render(args) {
    return (
      <>
        <div>
          <DefaultCard {...args} />
        </div>
      </>
    );
  },
};

Card.args = {
  label: "dafault label",
  paragraph:
    "I am older and need all the help I can get. The services provided give more than what they detail. Their guidance provided me better results than I was expecting. If you want lasting results, you need more than procedures at your appointment and they provide that. Thank you so much Marianne",
};
