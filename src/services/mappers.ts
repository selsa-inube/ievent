import { IPublication } from "@src/pages/queues/outlets/queuesInProgress/types";

const mapQueuesApiToEntity = (
    publication: Record<string, string | number | object>,
  ): IPublication => {
    const buildQueues: IPublication = {
      id: String(publication.publicationId),
      subscriberAndEvent: `${String(publication.descriptionUse)}/${String(publication.subscribersStatus)}`,
      status: String(publication.subscribersStatus),
      datePublication: new Date(String(publication.movementDate)),
    };
    return buildQueues;
  };
  
  const mapQueuesApiToEntities = (
    movements: Record<string, string | number | object>[],
  ): IPublication[] => {
    return movements
      .map(mapQueuesApiToEntity)
      .sort((a, b) => b.datePublication.getTime() - a.datePublication.getTime());
  };
  export { mapQueuesApiToEntities, mapQueuesApiToEntity };