import { MdSearch } from "react-icons/md";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";

import { Table } from "@components/data/Table";
import {
  actions,
  actionsResponsive,
  breakPointsTable,
  queuesNormailzeEntries,
  titlesConfig,
} from "./config/table";
import { IPublication } from "./types";

interface IQueuesInProgressProps {
  entries: IPublication[];
  loading: boolean;
  handleSearchQueues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderData: () => void;
  searchQueues: string;
}

function QueuesInProgressUI(props: IQueuesInProgressProps) {
  const {
    loading,
    handleSearchQueues,
    searchQueues,
    entries,
    handleOrderData,
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
            actions={actions}
            loading={loading}
            actionsResponsive={actionsResponsive}
            entries={queuesNormailzeEntries(entries)}
            widthColumnSuscriber={"75%"}
            filter={searchQueues}
          />
        </Stack>
      </Stack>
    </>
  );
}

export { QueuesInProgressUI };
