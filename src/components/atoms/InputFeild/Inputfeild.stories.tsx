import type { Meta, StoryObj } from "@storybook/react";
import { InputFeild as DefaultInputFeild} from ".";

const meta: Meta<typeof DefaultInputFeild> = {
    component: DefaultInputFeild,
    tags: ["autodocs"],
    title: "Component/atoms/InputFeild",
  };
  
  export default meta;
  type Story = StoryObj<typeof DefaultInputFeild>;
  
  export const InputFeild: Story = {
    render: function Render(args) {
      return (
        <>
          <div>
            <DefaultInputFeild {...args} />
          </div>
        </>
      );
    },
  };
  InputFeild.args = {
    value: "",
    placeHolder:'type here..',
  };