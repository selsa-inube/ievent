import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Clients } from ".";
import { clientsDataMock } from "@mocks/login/clients.mock";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Clients> = {

  title: "layouts/login/outlets/clients",
  component: Clients,
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

export const Default = () => <Clients clients={clientsDataMock} />;

export default meta;
