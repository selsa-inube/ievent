import {
  MdImportExport,
  MdOutlineRemoveRedEye,
  MdCancel,
} from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { StyledContainerActions } from "./styles";
import { ITitle } from "../props";

const titlesMock: ITitle[] = [
  {
    id: "Subscriber",
    titleName: "Suscriptor/Evento",
    priority: 0,
  },
  {
    id: "Status",
    titleName: "Estado",
    priority: 1,
  },
  {
    id: "Date",
    titleName: (
      <StyledContainerActions>
        Fecha de publicación
        <Icon appearance="primary" icon={<MdImportExport />} size="24px" />
      </StyledContainerActions>
    ),
    priority: 2,
  },
];

const actionsMock = [
  {
    id: "Details",
    actionName: "Detalles",
    content: () => (
      <Icon appearance="gray" icon={<MdOutlineRemoveRedEye />} size="16px" />
    ),
  },
];

const actionsResponsiveMock = [
  {
    id: "Status",
    actionName: "",
    content: () => <Icon appearance="danger" icon={<MdCancel />} size="20px" />,
  },
  {
    id: "Details",
    actionName: "Detalles",
    content: () => (
      <Icon appearance="dark" icon={<MdOutlineRemoveRedEye />} size="16px" />
    ),
  },
];

const breakPointsMock = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 3 },
  { breakpoint: "(max-width: 850px)", totalColumns: 1},
];

const entriesMock = [
  {
    id: "11",
    Subscriber: "Modification of a portfolio obligation in LINIX / update_portfolio_obligation_ICLIENT",
    Status: "Sin Procesar",
    Date: "2024/05/15 - 00:55:40",
  },
  {
    id: "12",
    Subscriber: "Not specified for the event confirmationpaymentinexternalaccount / StartPaymentWorkflow",
    Status: "Error",
    Date: "2024/05/09 - 00:55:40",
  },
  {
    id: "13",
    Subscriber: "test.linixaddotherdebt / add_other_debt_ICLIENT",
    Status: "Sin Procesar",
    Date: "2024/05/11 - 00:55:40",
  },
  {
    id: "14",
    Subscriber: "Adding a credit application in the LINIX credit application / add_credit_request",
    Status: "Error",
    Date: "2024/05/05 - 00:55:40",
  },
];

export {
  titlesMock,
  actionsMock,
  actionsResponsiveMock,
  breakPointsMock,
  entriesMock,
};
