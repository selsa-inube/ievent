import { discardPublication } from "@services/discardPublication";
import { IActions } from "@components/data/Table/props";
import { IPublicationRequest } from "../../types";

const deletePublication = async (
  publication: IActions,
  descriptonDiscard: string
): Promise<string> => {
  let confirmationType 
  const publicatioData: IPublicationRequest = {
    publicationId: String(publication.id),
    removalJustification: descriptonDiscard,
  };
  try {
    await discardPublication(publicatioData);
    confirmationType = "success";
  } catch (error) {
    confirmationType = "failed";
    throw error;
  } 

  return confirmationType
};

export { deletePublication };
