import { Icon } from "@inubekit/icon";
import {
  MdCalendarMonth,
  MdCancel,
  MdImportExport,
} from "react-icons/md";

import { IAction, IActions, ITitle } from "@components/data/Table/props";
import { StyledContainerTitle } from "@components/data/Table/stories/styles";

import { formatDateWithoutTime, formatPrimaryDate, formatStatus } from "../utils";
import { IPublication } from "../types";
import { DetailsModal } from "../components/DetailsModal";

const mapQueues = (publication: IActions) => {
  return {
    id: publication.id,
    suscriber: publication.subscriberAndEvent,
    status: publication.status,
    datePublication: publication.datePublication,
    dateMaximus: publication.dateMaximus,
    error: publication.error,
  };
};

const queuesNormailzeEntries = (publication: IPublication[]) =>
  publication.map((entry) => ({
    ...entry,
    id: entry.id,
    subscriberAndEvent: entry.subscriberAndEvent,
    status: entry.status && formatStatus(entry.status),
    datePublication:
      entry.datePublication && formatPrimaryDate(entry.datePublication),
      dateMaximus:entry.dateMaximus && formatDateWithoutTime(entry.dateMaximus) 
  }));

const titlesConfig = (handleOrderData: () => void) => {
  const titles: ITitle[] = [
    {
      id: "subscriberAndEvent",
      titleName: "Suscriptor/Evento",
      priority: 0,
    },
    {
      id: "status",
      titleName: "Estado",
      priority: 1,
    },
    {
      id: "datePublication",
      titleName: (
        <StyledContainerTitle>
          <span>Fecha de publicación</span>

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

const labelsModal = [
  {
    id: "suscriber",
    titleName: "Suscriptor / Evento",
    priority: 0,
  },
  {
    id: "status",
    titleName: "Estado",
    priority: 1,
  },
  {
    id: "datePublication",
    titleName: "Fecha de publicación",
    priority: 2,
  },
  {
    id: "dateMaximus",
    titleName: "Fecha de ejecución máxima",
    priority: 3,
  },
  {
    id: "error",
    titleName: "Descripción error",
    priority: 4,
  },
];

const actions: IAction[] = [
  {
    id: "Details",
    actionName: "Detalles",
    content: (publication: IActions) => <DetailsModal data={mapQueues(publication)} />,
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
    content: (publication) => <DetailsModal data={mapQueues(publication)} />,
  },
];

const breakPointsTable = [
  { breakpoint: "(min-width: 1121px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1120px)", totalColumns: 1 },
];

export {
  titlesConfig,
  actions,
  actionsResponsive,
  breakPointsTable,
  labelsModal,
  queuesNormailzeEntries,
  formatPrimaryDate,
};
