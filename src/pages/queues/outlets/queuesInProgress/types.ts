export interface IPublication {
  id: string;
  subscriberAndEvent: string;
  status: string;
  datePublication: Date;
  dateMaximus?: Date;
  error?: string;
}

export enum EStatus {
  ProcessedWithError = "ProcessedWithError",
  ProcessedIncident = "ProcessedIncident",
}
