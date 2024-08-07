import { MdSearch, MdWarning } from "react-icons/md";
import { useMediaQueries } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Flag } from "@inubekit/flag";

import { Table } from "@components/data/Table";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { IMessageState } from "@components/feedback/RenderMessage/types";

import { IDiscardForMessage } from "./components/Discard/types";
import {
  actionsConfig,
  actionsResponsiveConfig,
  breakPointsTable,
  infoDataTable,
  queuesNormalizeEntries,
  titlesConfig,
} from "./config/table";
import { IPublication } from "./types";
import { StyledErrorMessageFlag, StyledContainerToCenter } from "./styles";

interface IQueuesInProgressProps {
  entries: IPublication[];
  idPublicationDiscard: string;
  loading: boolean;
  message: IMessageState;
  searchQueues: string;
  errorMessage: string | null;
  closeErrorMessage: () => void;
  handleCloseSectionMessage: () => void;
  handleSearchQueues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderData: () => void;
  setDiscardForMessage: (show: IDiscardForMessage) => void;
}

function QueuesInProgressUI(props: IQueuesInProgressProps) {
  const {
    entries,
    idPublicationDiscard,
    loading,
    message,
    searchQueues,
    errorMessage,
    closeErrorMessage,
    handleCloseSectionMessage,
    handleSearchQueues,
    handleOrderData,
    setDiscardForMessage,
  } = props;
  const [smallScreen, mediumScreen] = Object.values(
    useMediaQueries(["(max-width: 580px)", "(max-width: 1200px) "])
  );

  return (
    <>
      <StyledContainerToCenter>
        <Stack
          direction="column"
          width={mediumScreen ? "-webkit-fill-available" : "min(1192px, 100%)"}
          padding={smallScreen ? "24px" : "32px 64px"}
        >
          <Stack gap="32px" direction="column">
            <Stack justifyContent="center">
              <Text
                as="h1"
                type="title"
                size={smallScreen ? "medium" : "large"}
                textAlign="center"
                appearance="dark"
              >
                Cola de publicaciones
              </Text>
            </Stack>

            <Stack justifyContent="space-between" alignItems="center">
              <Textfield
                name="searchQueues"
                id="searchQueues"
                placeholder="Búsqueda..."
                type="search"
                iconBefore={<MdSearch />}
                size="compact"
                value={searchQueues}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSearchQueues(e)
                }
              />
            </Stack>
            <Table
              id="tableQueuesInProgress"
              titles={titlesConfig(handleOrderData)}
              breakpoints={breakPointsTable}
              actions={actionsConfig(setDiscardForMessage)}
              loading={loading}
              actionsResponsive={actionsResponsiveConfig(
                entries,
                setDiscardForMessage
              )}
              entries={queuesNormalizeEntries(entries)}
              infoData={infoDataTable}
              widthColumnSuscriber={"75%"}
              filter={searchQueues}
            />
            {idPublicationDiscard && message.visible && (
              <RenderMessage
                message={message}
                handleCloseMessage={handleCloseSectionMessage}
                onMessageClosed={handleCloseSectionMessage}
              />
            )}
          </Stack>
        </Stack>
      </StyledContainerToCenter>
      {errorMessage && (
        <StyledErrorMessageFlag>
          <Flag
            title="Error"
            description={errorMessage}
            appearance="danger"
            duration={5000}
            icon={<MdWarning />}
            closeFlag={closeErrorMessage}
            isMessageResponsive
          />
        </StyledErrorMessageFlag>
      )}
    </>
  );
}

export { QueuesInProgressUI };
