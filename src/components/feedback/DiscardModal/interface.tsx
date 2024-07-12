import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { Divider } from "@inubekit/divider";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";

import { Discard } from "@pages/queues/outlets/queuesInProgress/components/Discard";
import { IDiscardForMessage } from "@pages/queues/outlets/queuesInProgress/components/Discard/types";
import { IActions } from "@components/data/Table/props";

import { StyledModal } from "./styles";

interface DiscardModalUIProps {
  portalId: string;
  infoData: IActions;
  setDataDiscardForMessage: (show: IDiscardForMessage) => void;
  onCloseInteractiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseDiscardModal: () => void;
}

const DiscardModalUI = (props: DiscardModalUIProps) => {
  const {
    portalId,
    infoData,
    setDataDiscardForMessage,
    onCloseInteractiveModal,
    onCloseDiscardModal,
  } = props;

  const isMobile = useMediaQuery("(max-width: 500px)");

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap="20px">
          <Stack direction="column" gap="20px">
            <Stack alignItems="center" justifyContent="space-between">
              <Text type="title" size="medium" appearance="dark">
                Descartar
              </Text>
              <Icon
                appearance="dark"
                icon={<MdClear />}
                size="20px"
                onClick={onCloseDiscardModal}
                cursorHover
              />
            </Stack>

            <Divider dashed />

            <Discard
              publication={infoData}
              setDataDiscardForMessage={setDataDiscardForMessage}
              onCloseInteractiveModal={onCloseInteractiveModal}
              onCloseDiscardModal={onCloseDiscardModal}
            />
          </Stack>
        </Stack>
      </StyledModal>
    </Blanket>,

    node
  );
};

export { DiscardModalUI };
export type { DiscardModalUIProps };
