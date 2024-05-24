import { createContext, useEffect, useState } from "react";

import { usersMock } from "@src/mocks/users/users";
import linparLogo from "@assets/linpar.png";

import { AppContextProviderProps, IAppContext, IClient } from "./types";

export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleClientChange: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const [clientSigla, setClientSigla] = useState(
    localStorage.getItem("clientSigla") || ""
  );
  
  function handleClientChange(client: IClient) {
    const { sigla } = client;
    setClientSigla(sigla);
  }
  const { firstName, firstLastName } = usersMock;
  const company = clientSigla;

  useEffect(() => {
    localStorage.setItem("clientSigla", clientSigla);
  }, [clientSigla]);

 
  const userContext: IAppContext = {
    user: {
      username: `${firstName + " " + firstLastName}`,
      id: "abc123",
      company: company,
      operator: {
        name: "Linpar",
        logo: linparLogo,
      },
    },
    handleClientChange,
  };
  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
