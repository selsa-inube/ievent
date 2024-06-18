export interface IPublication {
  id: string;
  subscriberAndEvent?: string;
  status: string;
  datePublication: Date;
  dateMaximus?: Date;
  error?: string;
  subscriberStatusId?: string;
  executionErrorId?: string;
}

export interface IPublicationRequest {
  publicationId: string;
  removalJustification: string;
}

export interface IPublicationResponse {
  publicationId: string;
  removalJustification: string;
  subscribersStatus: [
    {
      publicationId: string;
      subscriberExecutionsError: [
        {
          executionErrorId: string;
        },
      ];
      subscriberStatusId: string;
    },
  ];
}

export enum EStatus {
  ProcessedWithError = "ProcessedWithError",
  ProcessedIncident = "ProcessedIncident",
}
