import { MdClear } from "react-icons/md";

import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Grid } from "@inubekit/grid";

import { StyledModal } from "./styles";
import { IInfoModal } from "./types";

interface InfoModalProps {
  infoData: IInfoModal[];
  onCloseModal: () => void;
}

function InfoModal(props: InfoModalProps) {
  const { infoData, onCloseModal } = props;

  return (
    <StyledModal>
      <Grid
        templateColumns="auto 0.5fr"
        justifyItems="end"
        justifyContent="space-between"
      >
        <Stack direction="column">
          {infoData.map((field, index) => (
            <Stack key={index} alignItems="center" gap="8px">
              <Icon
                appearance={field.appearanceIcon}
                icon={field.infoIcon}
                size="20px"
              />
              <Text type="body" appearance="gray" size="small">
                {field.infoName}
              </Text>
            </Stack>
          ))}
        </Stack>
        <MdClear size={24} cursor="pointer" onClick={onCloseModal} />
      </Grid>
    </StyledModal>
  );
}

export type { InfoModalProps };
export { InfoModal };
