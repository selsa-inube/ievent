import { Tag } from "@inubekit/tag";

import { EStatus, IPublication } from "./types";

const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const formatPrimaryDate = (date: Date): string => {
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
};

const formatDateWithoutTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleDateString("en-ZA", options);
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

export { formatPrimaryDate, formatDateWithoutTime, formatStatus, orderData };
