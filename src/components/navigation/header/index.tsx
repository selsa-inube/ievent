import { User } from "@inubekit/user";
import { useMediaQueries } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { FullscreenNav, IFNavigation } from "@inubekit/fullscreennav";
import { IHeaderLink } from "./props";
import { StyledHeader, StyledLink } from "./styles";

interface IHeader {
  portalId: string;
  navigation: IFNavigation;
  logoURL: JSX.Element;
  userName?: string;
  client?: string;
  links?: IHeaderLink[];
  showLinks?: boolean;
  showUser?: boolean;
  logoutTitle?: string;
}

const Header = (props: IHeader) => {
  const {
    portalId,
    navigation,
    logoURL,
    userName,
    client,
    links,
    showLinks = false,
    showUser = true,
    logoutTitle = "Logout",
  } = props;

  const [mobile, tablet] = Object.values(
    useMediaQueries(["(max-width: 420px)", "(max-width: 944px) "]),
  );

  return (
    <StyledHeader>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack
          justifyContent="space-between"
          gap="23px"
          height={showUser ? "auto" : "53px"}
          alignItems="center"
        >
          {tablet && (
            <FullscreenNav
              portalId={portalId}
              navigation={navigation}
              logoutPath="/logout"
              logoutTitle={logoutTitle}
            />
          )}
          {logoURL}
        </Stack>
        <Stack justifyContent="space-between" gap="23px">
          {showLinks &&
            links &&
            links.map((link, index) => (
              <StyledLink key={index} to={link.path}>
                <Text
                  type="label"
                  size="medium"
                  appearance="dark"
                >
                  {link.label}
                </Text>
              </StyledLink>
            ))}
          {showUser && userName && (
            <User
              username={userName}
              client={client!}
              size={mobile ? "small" : "large"}
            />
          )}
        </Stack>
      </Stack>
    </StyledHeader>
  );
};

export { Header };
export type { IHeader };