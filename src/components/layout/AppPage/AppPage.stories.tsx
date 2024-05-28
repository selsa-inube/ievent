import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import { AppContext } from "@src/context/AppContext";
import { usersMock } from "@src/mocks/users/users";
import linparLogo from "@assets/linpar.png";

import { AppPage } from ".";

const { firstName, firstLastName } = usersMock;

const userContext = {
  user: {
    username: `${firstName + " " + firstLastName}`,
    id: "abc123",
    company: "Linpar",
    operator: {
      name: "Linpar",
      logo: linparLogo,
    },
  },
  handleClientChange: () => {},
};

const meta: Meta<typeof AppPage> = {
  title: "components/layout/appPage",
  component: AppPage,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <AppContext.Provider value={userContext}>
          <Story />
        </AppContext.Provider>
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <AppPage />;

export default meta;
