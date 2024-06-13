import { Tag } from "@inubekit/tag";

import { EStatus, IPublication } from "./types";

const formatPrimaryDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const dateString = date.toLocaleDateString("en-ZA", options);

  return dateString.replace(",", " -");
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
