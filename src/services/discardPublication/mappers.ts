import {
  IPublicationRequest,
  IPublicationResponse,
} from "@pages/queues/outlets/queuesInProgress/types";

const mapDiscardPublicationApiToEntity = (
  publication: Record<string, string | number | object>
): IPublicationResponse => {
  return {
    publicationId: String(publication.publicationId),
    removalJustification: String(publication.removalJustification),
    subscribersStatus: [
      {
        publicationId: String(publication.publicationId),
        subscriberExecutionsError: [
          {
            executionErrorId: String(publication.executionErrorId),
          }
        ],
        subscriberStatusId: String(publication.subscriberStatusId),
      }
    ]
  };
};

const mapDiscardPublicationEntityToApi = (
  publication: IPublicationRequest
):  Record<string, string | number | object> => {
  return {
    removePublicationQueueRequests: [
      {
        publicationId: publication.publicationId,
        removalJustification: publication.removalJustification,
      },
    ],
  };
};

export { mapDiscardPublicationApiToEntity, mapDiscardPublicationEntityToApi };
