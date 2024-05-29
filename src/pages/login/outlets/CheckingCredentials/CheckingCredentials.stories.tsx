import { BrowserRouter } from "react-router-dom";
import { CheckingCredentials } from ".";
import { Meta } from "@storybook/react";

const meta: Meta<typeof CheckingCredentials> = {
  title: "layouts/login/outlets/checking-credentials",
  component: CheckingCredentials,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <CheckingCredentials clients={[]} />;

export default meta;
