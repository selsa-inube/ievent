import { Icon } from "@inubekit/icon";
import {
  MdCalendarMonth,
  MdCancel,
  MdImportExport,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import { IAction, ITitle } from "@components/data/Table/props";
import { StyledContainerTitle } from "@components/data/Table/stories/styles";
import { IPublication } from "../types";
import { formatPrimaryDate, formatStatus } from "../utils";

const queuesNormailzeEntries = (publication: IPublication[]) =>
  publication.map((entry) => ({
    ...entry,
    Id: entry.id,
    SubscriberAndEvent: entry.subscriberAndEvent,
    Status: entry.status && formatStatus(entry.status),
    DatePublication:
      entry.datePublication && formatPrimaryDate(entry.datePublication),
  }));

const titlesConfig = (handleOrderData: () => void) => {
  const titles: ITitle[] = [
    {
      id: "SubscriberAndEvent",
      titleName: "Suscriptor/Evento",
      priority: 0,
    },
    {
      id: "Status",
      titleName: "Estado",
      priority: 1,
    },
    {
      id: "DatePublication",
      titleName: (
        <StyledContainerTitle>
          <span>
          Fecha de publicación
          </span>
          
          <Icon
            appearance="dark"
            icon={<MdImportExport />}
            size="24px"
            onClick={() => handleOrderData()}
            cursorHover
          />
        </StyledContainerTitle>
      ),
      priority: 2,
    },
  ];

  return titles;
};

const actions: IAction[] = [
  {
    id: "Details",
    actionName: "Detalles",
    content: () => (
      <Icon appearance="dark" icon={<MdOutlineRemoveRedEye />} size="16px" />
    ),
  },
];

const actionsResponsive: IAction[] = [
  {
    id: "Status",
    actionName: "",
    content: () => <Icon appearance="danger" icon={<MdCancel />} size="20px" />,
  },
  {
    id: "date",
    actionName: "",
    content: () => (
      <Icon appearance="dark" icon={<MdCalendarMonth />} size="16px" />
    ),
  },
  {
    id: "Details",
    actionName: "Detalles",
    content: () => (
      <Icon appearance="dark" icon={<MdOutlineRemoveRedEye />} size="16px" />
    ),
  },
];

const breakPointsTable = [
  { breakpoint: "(min-width: 1121px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1120px)", totalColumns: 1},
];

export {
  titlesConfig,
  actions,
  actionsResponsive,
  breakPointsTable,
  queuesNormailzeEntries,
  formatPrimaryDate,
};
