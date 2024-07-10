import { Tag } from "@inubekit/tag";

import { EStatus, IPublication } from "./types";

const formatPrimaryDate = (date: Date, withTime?: boolean): string => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  if (withTime) {
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day}/${month}/${year} - ${hours}:${minutes} ${ampm}`;
  } else {
    return `${day}/${month}/${year}`;
  }
};

const formatStatus = (status: string) => {
  if (status === EStatus.ProcessedWithError) {
    return <Tag label="Error" appearance="danger" weight="strong" />;
  }

  if (status === EStatus.ProcessedIncident) {
    return <Tag label="Sin Procesar" appearance="warning" weight="strong" />;
  }
};

const orderData = (data: IPublication[], orderAscending: boolean) => {
  orderAscending
    ? data.sort(
        (b, a) => a.datePublication.getTime() - b.datePublication.getTime()
      )
    : data.sort(
        (a, b) => a.datePublication.getTime() - b.datePublication.getTime()
      );
};

export { formatPrimaryDate, formatStatus, orderData };
