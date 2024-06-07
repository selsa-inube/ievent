import { IPublication } from "@pages/queues/outlets/queuesInProgress/types";
import { enviroment } from "@src/config/environment";
import { mapQueuesApiToEntities } from "./mappers";

const queuesInProgressForUser = async (
  userIdentification: string
): Promise<IPublication[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;
  const perPage= "500";

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const queryParams = new URLSearchParams({
        customerPublicCode: userIdentification,
        per_page: perPage,
      });

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

      const options: RequestInit = {
        method: "GET",
        headers: {
          "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
          "Content-type": "application/json; charset=UTF-8",
        },
        signal: controller.signal,
      };

      const res = await fetch(
        `${
          enviroment.ICLIENT_API_URL_QUERY
        }/publications-queues?${queryParams.toString()}`,
        options
      );

      clearTimeout(timeoutId);

      if (res.status === 204) {
        return [];
      }

      const data = await res.json();

      if (!res.ok) {
        throw {
          message: "Error al obtener las publicaciones",
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
          "Todos los intentos fallaron. No se pudieron obtener las publicaciones."
        );
      }
    }
  }

  return [];
};

export { queuesInProgressForUser };
