import { useContext, useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { Grid } from "@inubekit/grid";
import { Header } from "@inubekit/header";
import { Nav } from "@inubekit/nav";

import { AppContext } from "@context/AppContext";
import { MenuSection } from "@components/navigation/MenuSection";
import { MenuUser } from "@components/navigation/MenuUser";
import { LogoutModal } from "@components/feedback/LogoutModal";

import { navigationConfig, logoutConfig } from "./config/apps.config";

import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledMenuContainer,
  StyledContainerNav,
  StyledHeaderContainer,
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
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target as Node) &&
      event.target !== userMenuRef.current
    ) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    const selectUser = document.querySelector("header div div:nth-child(2)");
    const handleToggleuserMenu = () => {
      setShowUserMenu(!showUserMenu);
    };

    document.addEventListener("mousedown", handleClickOutside);
    selectUser?.addEventListener("mouseup", handleToggleuserMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  const handleToggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
    setShowUserMenu(false);
  };

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <StyledHeaderContainer>
          <Header
            portalId="portal"
            navigation={navigationConfig}
            logoURL={renderLogo(user.operator.logo)}
            userName={user.username}
            client={user.company}
          />
        </StyledHeaderContainer>
        <StyledContainer>
          {showUserMenu && (
            <StyledMenuContainer ref={userMenuRef}>
              <MenuUser userName={user.username} businessUnit={user.company} />
              <MenuSection
                sections={[
                  {
                    links: [
                      {
                        title: "Cerrar sesión",
                        iconBefore: <MdLogout />,
                        onClick: handleToggleLogoutModal,
                      },
                    ],
                  },
                ]}
                divider={true}
              />
            </StyledMenuContainer>
          )}

          {showLogoutModal && (
            <LogoutModal
              logoutPath="/logout"
              handleShowBlanket={handleToggleLogoutModal}
            />
          )}
          <StyledContainer>
            <Grid templateColumns="1fr" alignContent="unset">
              {!"1fr" && (
                <StyledContainerNav>
                  <Nav
                    navigation={navigationConfig}
                    logoutPath={logoutConfig.logoutPath}
                    logoutTitle={logoutConfig.logoutTitle}
                  />
                </StyledContainerNav>
              )}
              <StyledMain>
                <Outlet />
              </StyledMain>
            </Grid>
          </StyledContainer>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
}

export { AppPage };
