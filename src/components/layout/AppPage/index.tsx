import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@inubekit/hooks";
import { Grid } from "@inubekit/grid";
import { Header } from "@inubekit/header";

import { AppContext } from "@context/AppContext";

import { navigationConfig } from "./config/apps.config";
import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
} from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const { user } = useContext(AppContext);

  const smallScreen = useMediaQuery("(max-width: 849px)");

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <Header
          portalId="portal"
          navigation={navigationConfig}
          logoURL={renderLogo(user.operator.logo)}
          userName={user.username}
          client={user.company}
        />
        <StyledContainer>
          <Grid
            templateColumns={smallScreen ? "1fr" : "auto 1fr"}
            alignContent="unset"
          >
            <StyledMain>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
}

export { AppPage };
