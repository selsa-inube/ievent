import { BrowserRouter } from "react-router-dom";
import { LoadingApp } from "./index";
import { Meta } from "@storybook/react";

const meta: Meta<typeof LoadingApp> = {
  title: "layouts/login/outlets/loading-app",
  component: LoadingApp,
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

export const Default = () => <LoadingApp />;

export default meta;
