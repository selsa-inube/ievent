import { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import linparLogo from "@assets/linpar.png";

import { AppContextProviderProps, IAppContext, IClient } from "./types";


export const AppContext = createContext<IAppContext>({
  user: { username: "", id: "", company: "", operator: { name: "", logo: "" } },
  handleClientChange: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const { user } = useAuth0();
  const [clientSigla, setClientSigla] = useState(
    localStorage.getItem("clientSigla") || ""
  );

  const[clientLogo, setClientLogo] = useState<string>(linparLogo);
  
  function handleClientChange(client: IClient) {
    const { sigla, logo } = client;
    setClientSigla(sigla);
    setClientLogo(logo);
  }

  useEffect(() => {
    localStorage.setItem("clientSigla", clientSigla);
    localStorage.setItem("clientLogo", clientLogo);
  }, [clientSigla, clientLogo]);

  
  const company = clientSigla;

   const userContext: IAppContext = {
    user: {
      username: `${user?.name}`,
      id: "abc123",
      company: company,
      operator: {
        name: "Linpar",
        logo: clientLogo,
      },
    },
    handleClientChange,
  };
  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
