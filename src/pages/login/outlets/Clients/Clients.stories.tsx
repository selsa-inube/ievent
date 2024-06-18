import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta } from "@storybook/react";

import { clientsDataMock } from "@mocks/login/clients.mock";
import { Clients } from ".";

const meta: Meta<typeof Clients> = {

  title: "login/outlets/clients",
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
