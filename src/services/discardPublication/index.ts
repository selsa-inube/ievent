import {
  mapDiscardPublicationApiToEntity,
  mapDiscardPublicationEntityToApi,
} from "./mappers";
import { enviroment } from "@src/config/environment";
import { IPublicationRequest, IPublicationResponse } from "@src/pages/queues/outlets/queuesInProgress/types";

const discardPublication = async (
  publication: IPublicationRequest,
): Promise<IPublicationResponse | undefined> => {

  const requestUrl = `${enviroment.ICLIENT_API_URL_PERSISTENCE}/publications-queues`;

  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "X-Action": "RemovePublicationQueue",
        "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapDiscardPublicationEntityToApi(publication)),
    };

    const res = await fetch(requestUrl, options);
    
    const data = await res.json();

    if (res.status === 204) {
      return;
    }

    if (!res.ok) {
      throw {
        message: "Error al descartar publicación",
        status: res.status,
        data,
      };
    }

    return mapDiscardPublicationApiToEntity(data);
  } catch (error) {
    console.info(error);
    throw error;
  }
};

export { discardPublication };
