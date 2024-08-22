import { IPublication } from "@pages/queues/outlets/queuesInProgress/types";
import { enviroment } from "@src/config/environment";
import { mapQueuesApiToEntities } from "./mappers";

type FetchError = {
  message: string;
  status?: number;
  name?: string;
};

const queuesInProgressForUser = async (
  navigate: (path: string) => void,
  setErrorMessage: (message: string | null) => void
): Promise<IPublication[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;
  const perPage = "500";

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const queryParams = new URLSearchParams({
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
        `${enviroment.ICLIENT_API_URL_QUERY}/publications-queues?${queryParams.toString()}`,
        options
      );

      clearTimeout(timeoutId);

      if (res.status === 204) {
        return [];
      }

      if (!res.ok) {
        const data = await res.json();
        throw {
          message: "Error al obtener las publicaciones",
          status: res.status,
          data,
        } as FetchError;
      }

      const data = await res.json();

      const normalizedQueues = Array.isArray(data)
        ? mapQueuesApiToEntities(data)
        : [];

      return normalizedQueues;
    } catch (error: unknown) {
      const fetchError = error as FetchError;

      if (fetchError.name === "AbortError") {
        navigate("/service-error");
      } else if (fetchError.status) {
        const errorMessage = `${fetchError.status} - ${fetchError.message || "Error desconocido"}`;
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage(
          `Error desconocido: ${fetchError.message || fetchError}`
        );
      }

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
