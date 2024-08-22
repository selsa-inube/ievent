import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { queuesInProgressForUser } from "@services/getQueuesInProgress";
import {
  IMessage,
  IMessageState,
} from "@components/feedback/RenderMessage/types";

import { QueuesInProgressUI } from "./interface";
import { IPublication } from "./types";
import { orderData } from "./utils";
import { IDiscardForMessage } from "./components/Discard/types";
import { generalMessage } from "./config/messaage.config";

function QueuesInProgress() {
  const [searchQueues, setSearchQueues] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [orderAscending, setOrderAscending] = useState<boolean>(false);
  const [queues, setQueues] = useState<IPublication[]>([]);
  const [discardForMessage, setDiscardForMessage] =
    useState<IDiscardForMessage>({ id: "", successfulDiscard: false });
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleOrderData = () => {
    setOrderAscending(!orderAscending);
    orderData(queues, orderAscending);
    setQueues(queues);
  };

  const validateQueues = async () => {
    if (queues.length === 0) {
      setLoading(true);
      try {
        const newQueues = await queuesInProgressForUser(
          navigate,
          setErrorMessage
        );
        setQueues(newQueues);
      } catch (error) {
        console.error("Error durante la validación de las colas:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    validateQueues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const messageType = discardForMessage.successfulDiscard
      ? generalMessage.success
      : generalMessage.failed;

    const filterDiscardPublication = queues.filter(
      (publication) => publication.id !== discardForMessage.id
    );

    discardForMessage.successfulDiscard && setQueues(filterDiscardPublication);

    setMessage({
      visible: true,
      data: messageType as IMessage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discardForMessage.successfulDiscard]);

  const handleSearchQueues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueues(e.target.value);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  const closeErrorMessage = () => {
    setErrorMessage(null);
  };

  return (
    <QueuesInProgressUI
      handleSearchQueues={handleSearchQueues}
      loading={loading}
      searchQueues={searchQueues}
      entries={queues}
      idPublicationDiscard={discardForMessage.id}
      message={message}
      errorMessage={errorMessage}
      closeErrorMessage={closeErrorMessage}
      handleOrderData={handleOrderData}
      handleCloseSectionMessage={handleCloseSectionMessage}
      setDiscardForMessage={setDiscardForMessage}
    />
  );
}

export { QueuesInProgress };
