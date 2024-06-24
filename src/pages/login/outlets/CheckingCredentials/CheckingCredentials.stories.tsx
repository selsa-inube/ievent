import { BrowserRouter } from "react-router-dom";
import { Meta } from "@storybook/react";

import { CheckingCredentials } from ".";

const meta: Meta<typeof CheckingCredentials> = {
  title: "login/outlets/checking-credentials",
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
