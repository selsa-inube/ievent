import { MdSearch } from "react-icons/md";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";

import { Table } from "@components/data/Table";

import { RenderMessage } from "@components/feedback/RenderMessage";
import { IMessageState } from "@components/feedback/RenderMessage/types";
import { IDiscardForMessage } from "./components/Discard/types";
import {
  actionsConfig,
  actionsResponsiveConfig,
  breakPointsTable,
  queuesNormailzeEntries,
  titlesConfig,
} from "./config/table";
import { IPublication } from "./types";

interface IQueuesInProgressProps {
  entries: IPublication[];
  idPublicationDiscard: string;
  loading: boolean;
  message: IMessageState;
  searchQueues: string;
  handleCloseSectionMessage: ()=> void;
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
    handleCloseSectionMessage,
    handleSearchQueues,
    handleOrderData,    
    setDiscardForMessage,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "24px" : "32px 64px"}
      >
        <Stack gap="32px" direction="column">
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
            actionsResponsive={actionsResponsiveConfig(setDiscardForMessage)}
            entries={queuesNormailzeEntries(entries)}
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
    </>
  );
}

export { QueuesInProgressUI };
