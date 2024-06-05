import { titlesMock, actionsMock, breakPointsMock, actionsResponsiveMock } from "./mocks";

import { Table, ITable } from "..";

import { props } from "../props";

const story = {
  title: "data/Table",
  component: Table,
  argTypes: props,
};

const Paginations = (args: ITable) => <Table {...args} />;
Paginations.args = {
  id: "tableId",
  titles: titlesMock,
  actions: actionsMock,
  entries: [
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
  ],
  actionsResponsive: actionsResponsiveMock,
  filter: "",
  pageLength: 3,
  breakpoints: breakPointsMock,
  modalTitle: "Form",
  infoTitle: "Information",
};

export { Paginations };
export default story;
