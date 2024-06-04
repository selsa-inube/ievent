
import { IPublication } from "@src/pages/queues/outlets/queuesInProgress/types";
import { mapQueuesApiToEntities } from "./mappers";
import { enviroment } from "@src/config/environment";

const queuesInProgressForUser = async (
  userIdentification: string,
): Promise<IPublication[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const queryParams = new URLSearchParams({
        customerPublicCode: userIdentification,
      });

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

      const options: RequestInit = {
        method: "GET",
        headers: {
        //   Realm: enviroment.REALM,
        //   Authorization: `Bearer ${accessToken}`,
          "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
          "Content-type": "application/json; charset=UTF-8",
        },
        signal: controller.signal,
      };

      const res = await fetch(
        `${
          enviroment.ICLIENT_API_URL_QUERY
        }/publications-queues?${queryParams.toString()}`,
        options,
      );

      clearTimeout(timeoutId);

      if (res.status === 204) {
        return [];
      }

      const data = await res.json();

      if (!res.ok) {
        throw {
          message: "Error al obtener los créditos del usuario",
          status: res.status,
          data,
        };
      }

      const normalizedCredits = Array.isArray(data)
        ? mapQueuesApiToEntities(data)
        : [];

      return normalizedCredits;
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(
          "Todos los intentos fallaron. No se pudieron obtener los créditos del usuario.",
        );
      }
    }
  }

  return [];
};

export { queuesInProgressForUser };
