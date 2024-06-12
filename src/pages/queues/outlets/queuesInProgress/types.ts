export interface IPublication {
id:string,
subscriberAndEvent: string,
status: string,
datePublication: Date;
}

export enum EStatus {
    ProcessedWithError = "ProcessedWithError",
    ProcessedIncident = "ProcessedIncident",
  }