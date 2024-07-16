import { Icon } from "@inubekit/icon";
import {
  MdCancel,
  MdDoDisturbOn,
  MdImportExport,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import { IAction, IActions, ITitle } from "@components/data/Table/props";
import { StyledContainerTitle } from "@components/data/Table/stories/styles";

import { formatPrimaryDate, formatStatus } from "../utils";
import { EStatus, IPublication } from "../types";
import { DetailsModal } from "../components/DetailsModal";
import { IDiscardForMessage } from "../components/Discard/types";
import { Text } from "@inubekit/text";
import { IInfoModal } from "@src/components/layout/modals/InfoModal/types";

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

const queuesNormalizeEntries = (publication: IPublication[]) =>
  publication.map((entry) => ({
    ...entry,
    id: entry.id,
    subscriberAndEvent: entry.subscriberAndEvent,
    status: entry.status && formatStatus(entry.status),
    datePublication:
      entry.datePublication && formatPrimaryDate(entry.datePublication, true),
    dateMaximus: entry.dateMaximus && formatPrimaryDate(entry.dateMaximus),
  }));

const statusActions = (publicationId: string, entries: IPublication[]) => {
  const publication = entries.find((entry) => entry.id === publicationId);
  return publication?.status === EStatus.ProcessedWithError;
};

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
          <Text type="label" size="medium" appearance="dark" textAlign="start">
            Fecha de publicación
          </Text>

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

const actionsConfig = (
  setDataDiscardForMessage: (show: IDiscardForMessage) => void
) => {
  const actions: IAction[] = [
    {
      id: "Details",
      actionName: "Detalles",
      content: (publication: IActions) => (
        <DetailsModal
          data={mapQueues(publication)}
          setDataDiscardForMessage={setDataDiscardForMessage}
        />
      ),
    },
  ];
  return actions;
};

const actionsResponsiveConfig = (
  entries: IPublication[],
  setDataDiscardForMessage: (show: IDiscardForMessage) => void
) => { 
  const actionsResponsive: IAction[] = [
    {
      id: "Status",
      actionName: "",
      content: ({ id }) =>
        statusActions(id, entries) ? (
          <Icon appearance="danger" icon={<MdCancel />} size="20px" />
        ) : (
          <Icon appearance="warning" icon={<MdDoDisturbOn />} size="20px" />
        ),
    },
    {
      id: "Details",
      actionName: "Detalles",
      content: (publication) => (
        <DetailsModal
          data={mapQueues(publication)}
          setDataDiscardForMessage={setDataDiscardForMessage}
        />
      ),
    },
  ];

  return actionsResponsive;
};

const infoDataTable: IInfoModal[] = [
  {
    infoName: "Error",
    infoIcon: <MdCancel />,
    appearanceIcon: "danger",
  },
  {
    infoName: "Sin Procesar",
    infoIcon: <MdDoDisturbOn />,
    appearanceIcon: "warning",
  },
  {
    infoName: "Ver Detalle",
    infoIcon: <MdOutlineRemoveRedEye />,
    appearanceIcon: "dark",
  },
];

const breakPointsTable = [
  { breakpoint: "(min-width: 1121px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1120px)", totalColumns: 1 },
  { breakpoint: "(max-width: 1120px)", totalColumns: 1 },
];

export {
  titlesConfig,
  actionsConfig,
  actionsResponsiveConfig,
  breakPointsTable,
  infoDataTable,
  labelsModal,
  queuesNormalizeEntries,
  formatPrimaryDate,
};
