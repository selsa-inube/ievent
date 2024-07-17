import { Stack } from "@inubekit/stack"
import { Text } from "@inubekit/text"
import { Icon } from "@inubekit/icon"
import { Button } from "@inubekit/button"
import { Blanket } from "@inubekit/blanket"
import { MdClose } from "react-icons/md";
import { useMediaQuery } from "@inubekit/hooks";
import { Link } from "react-router-dom";

import { StyledBackdropBlanket, StyledModal } from "./styles";

interface ILogoutModalProps {
  handleShowBlanket: () => void;
  logoutPath: string;
}

function LogoutModal(props: ILogoutModalProps) {
  const { logoutPath, handleShowBlanket } = props;
  const smallScreen = useMediaQuery("(max-width: 743px)");


  return (
    <StyledBackdropBlanket>
      <Blanket>
        <StyledModal $smallScreen={smallScreen}>
          <Stack direction="column" gap="25px" padding="30px">
            <Stack direction="column" gap="30px">
              <Stack direction="row" justifyContent="space-between">
                <Text
                  type="title"
                  size={smallScreen ? "large" : "large"}
                  appearance="dark"
                  textAlign="center"
                  cursorHover
                >
                  Cerrar sesión
                </Text>
                <Icon
                  appearance="dark"
                  icon={<MdClose />}
                  size={smallScreen ? "24px" : "30px"}
                  onClick={handleShowBlanket}
                />
              </Stack>

              <Text size={smallScreen ? "large" : "medium"} appearance="gray">
                ¿Realmente quieres cerrar sesión?
              </Text>
            </Stack>
            <Stack justifyContent="flex-end" gap="8px">
              <Button
                appearance="gray"
                spacing="wide"
                onClick={handleShowBlanket}
              >
                Cancelar
              </Button>
              <Link to={logoutPath}>
                <Button
                  appearance="primary"
                  spacing="wide"
                  onClick={handleShowBlanket}
                >
                  Cerrar sesión
                </Button>
              </Link>
            </Stack>
          </Stack>
        </StyledModal>
      </Blanket>
    </StyledBackdropBlanket>
  );
}

export { LogoutModal };
export type { ILogoutModalProps };
