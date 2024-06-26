import { IPublication } from "@pages/queues/outlets/queuesInProgress/types";

const mapQueuesApiToEntity = (
  publication: Record<string, string | number | object>
): IPublication => {
  const DescripcionError = Object(publication.subscribersStatus)[0]
    .subscriberExecutionsError;

  const buildQueues: IPublication = {
    id: String(publication.publicationId),
    subscriberAndEvent: `${Object(publication.subscribersStatus)[0].abbreviatedNameSubscriber} / ${String(publication.descriptionUse)}`,
    status: Object(publication.subscribersStatus)[0].subscriberStatus,
    datePublication: new Date(String(publication.publicationDate)),
    dateMaximus: new Date(Object(publication.subscribersStatus)[0].maximumExecutionDate),
    subscriberStatusId: Object(publication.subscribersStatus)[0].subscriberStatusId,
    executionErrorId: Object(DescripcionError)[0]?.executionErrorId,
    error: Object(DescripcionError)[0]?.errorDescription
  };
  return buildQueues;
};

const mapQueuesApiToEntities = (
  publications: Record<string, string | number | object>[]
): IPublication[] => {
  return publications
    .map(mapQueuesApiToEntity)
    .filter(
      (publication) =>
        publication &&
        (publication.status === "ProcessedWithError" ||
          publication.status === "ProcessedIncident")
    )
    .sort((a, b) => b.datePublication.getTime() - a.datePublication.getTime());
};
export { mapQueuesApiToEntities, mapQueuesApiToEntity };
