import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputFieldSection as DefaultInputFieldSection } from ".";

const meta: Meta<typeof DefaultInputFieldSection> = {
  component: DefaultInputFieldSection,
  tags: ["autodocs"],
  title: "Component/organisms/InputFieldSection",
};

export default meta;
type Story = StoryObj<typeof DefaultInputFieldSection>;

export const InputFieldSection: Story = {
  render: function Render(args) {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    return (
      <>
        <div>
          <DefaultInputFieldSection
            {...args}
            name={name}
            mobileNo={mobileNo}
            email={email}
            setName={setName}
            setMobileNo={setMobileNo}
            setEmail={setEmail}
          />
        </div>
      </>
    );
  },
};

InputFieldSection.args = {
  name: "string",
  mobileNo: "string",
  email: "string",
};
