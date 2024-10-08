import { useState } from "react";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { Fieldset } from "@inubekit/fieldset";
import { Label } from "@inubekit/label";
import { Button } from "@inubekit/button";
import { Divider } from "@inubekit/divider";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Blanket } from "@inubekit/blanket";

import { IDiscardForMessage } from "@pages/queues/outlets/queuesInProgress/components/Discard/types";
import { IActions } from "@components/data/Table/props";

import { StyledContainer, StyledModal, StyledModalFields } from "./styles";
import { ILabel } from "./types";
import { DiscardModal } from "../DiscardModal";

interface InteractiveModalUIProps {
  portalId: string;
  title: string;
  infoData: IActions;
  labels: ILabel[];
  setDataDiscardForMessage: (show: IDiscardForMessage) => void;
  onCloseModal: () => void;
  handleReprocess: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  infoTitle: string;
}

const InteractiveModalUI = (props: InteractiveModalUIProps) => {
  const {
    portalId,
    title,
    infoData,
    labels,
    setDataDiscardForMessage,
    onCloseModal,
    handleReprocess,
    setShowModal,
    infoTitle,
  } = props;

  const [discard, setDiscard] = useState(false);

  const handleDiscardState = () => {
    setDiscard(!discard);
  };

  const isMobile = useMediaQuery("(max-width: 500px)");

  const node = document.getElementById(portalId);

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <>
      <StyledContainer>
        <Blanket>
          <StyledModal $smallScreen={isMobile}>
            <Stack direction="column" gap="20px">
              <Stack direction="column" gap="16px">
                <Stack direction="column" gap="8px">
                  <Stack alignItems="center" justifyContent="space-between">
                    <Text type="title" size="medium" appearance="dark">
                      {title}
                    </Text>
                    <MdClear
                      size={24}
                      cursor="pointer"
                      onClick={onCloseModal}
                    />
                  </Stack>

                  <Text type="body" size="medium" appearance="gray">
                    {infoTitle}
                  </Text>
                </Stack>

                <Divider dashed />

                {labels.slice(0, 1).map(
                  (field, id) =>
                    infoData[field.id] && (
                      <StyledModalFields key={id} $smallScreen={isMobile}>
                        <Label
                          htmlFor={field.id}
                          size="small"
                          margin="0px 0px 0px 16px"
                        >
                          {field.titleName}
                        </Label>
                        <Fieldset legend="" spacing="compact">
                          <Text>{infoData[field.id]}</Text>
                        </Fieldset>
                      </StyledModalFields>
                    )
                )}
                {labels.slice(1, 2).map(
                  (field, id) =>
                    infoData[field.id] && (
                      <Stack key={id} gap="16px">
                        <Label
                          htmlFor={field.id}
                          size="small"
                          margin="0px 0px 0px 16px"
                        >
                          {field.titleName}
                        </Label>
                        <Stack>{infoData[field.id]}</Stack>
                      </Stack>
                    )
                )}
                {labels.slice(2).map(
                  (field, id) =>
                    infoData[field.id] && (
                      <StyledModalFields key={id} $smallScreen={isMobile}>
                        <Label
                          htmlFor={field.id}
                          size="small"
                          margin="0px 0px 0px 16px"
                        >
                          {field.titleName}
                        </Label>
                        <Fieldset legend="" spacing="compact">
                          <Text>{infoData[field.id]}</Text>
                        </Fieldset>
                      </StyledModalFields>
                    )
                )}
              </Stack>
              <Stack gap="8px" justifyContent="flex-end">
                <Button
                  spacing="wide"
                  appearance="light"
                  variant="filled"
                  onClick={handleDiscardState}
                >
                  Descartar
                </Button>
                <Button
                  spacing="wide"
                  onClick={handleReprocess}
                  appearance="primary"
                >
                  Reprocesar
                </Button>
              </Stack>
            </Stack>
          </StyledModal>
        </Blanket>
      </StyledContainer>
      {discard && (
        <DiscardModal
          portalId="portal"
          infoData={infoData}
          onCloseDiscardModal={handleDiscardState}
          onCloseInteractiveModal={setShowModal}
          setDataDiscardForMessage={setDataDiscardForMessage}
        />
      )}
    </>,
    node
  );
};

export { InteractiveModalUI };
export type { InteractiveModalUIProps };
