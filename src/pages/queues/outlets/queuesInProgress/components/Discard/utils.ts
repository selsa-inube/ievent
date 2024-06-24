import { discardPublication } from "@services/discardPublication";
import { IActions } from "@components/data/Table/props";
import { IPublicationRequest } from "../../types";

const deletePublication = async (
  publication: IActions,
  descriptonDiscard: string
): Promise<boolean> => {
  let confirmationDiscard;
  const publicatioData: IPublicationRequest = {
    publicationId: String(publication.id),
    removalJustification: descriptonDiscard,
  };
  try {
    await discardPublication(publicatioData);
    confirmationDiscard = true;
  } catch (error) {
    confirmationDiscard = false;
    throw error;
  }

  return confirmationDiscard;
};

export { deletePublication };
