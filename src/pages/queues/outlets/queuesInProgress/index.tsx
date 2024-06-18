import { useEffect, useState } from "react";

import { queuesInProgressForUser } from "@src/services/getQueuesInProgress";
import { QueuesInProgressUI } from "./interface";
import { IPublication } from "./types";
import { orderData } from "./utils";
import { IMessageState } from "@src/components/feedback/RenderMessage/types";


function QueuesInProgress() {
  const [searchQueues, setSearchQueues] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [orderAscending, setOrderAscending] = useState<boolean>(false);
  const [queues, setQueues] = useState<IPublication[]>([]);
  const [idPublicationDiscard, setIdPublicationDiscard] = useState("");
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const handleOrderData = () => {
    setOrderAscending(!orderAscending);
    orderData(queues, orderAscending);
    setQueues(queues);
  };

  const validateQueues = async () => {
    if (queues.length === 0) {
      setLoading(true);
      try {
        const newQueues = await queuesInProgressForUser();
        setQueues(newQueues);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    validateQueues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const filterDiscardPublication = queues.filter(
  //     (publication) => publication.id !== idPublicationDiscard
  //   );
  //   filterDiscardPublication &&
  //     setMessage({
  //       visible: true,
  //       data: ,
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [idPublicationDiscard]);

  const handleSearchQueues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueues(e.target.value);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <QueuesInProgressUI
      handleSearchQueues={handleSearchQueues}
      loading={loading}
      searchQueues={searchQueues}
      entries={queues}
      idPublicationDiscard={idPublicationDiscard}
      message={message}
      handleOrderData={handleOrderData}
      handleCloseSectionMessage={handleCloseSectionMessage}
      setIdPublicationDiscard={setIdPublicationDiscard}
    />
  );
}

export { QueuesInProgress };
