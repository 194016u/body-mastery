import type { Meta, StoryObj } from "@storybook/react";
import { Footer as DefaultFooter} from ".";

const meta: Meta<typeof DefaultFooter> = {
    component: DefaultFooter,
    tags: ["autodocs"],
    title: "Component/molecules/Footer",
  };
  
  export default meta;
  type Story = StoryObj<typeof DefaultFooter>;
  
  export const Footer: Story = {
    render: function Render(args) {
      return (
        <>
          <div>
            <DefaultFooter {...args} />
          </div>
        </>
      );
    },
  };