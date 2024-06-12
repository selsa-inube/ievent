import { useEffect, useState } from "react";

import { queuesInProgressForUser } from "@src/services";
import { QueuesInProgressUI } from "./interface";
import { IPublication } from "./types";
import { orderData } from "./utils";

function QueuesInProgress() {
  const [searchQueues, setSearchQueues] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [orderAscending, setOrderAscending] = useState<boolean>(false);
  const [queues, setQueues] = useState<IPublication[]>([]);

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

  const handleSearchQueues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueues(e.target.value);
  };

  return (
    <QueuesInProgressUI
      handleSearchQueues={handleSearchQueues}
      loading={loading}
      searchQueues={searchQueues}
      entries={queues}
      handleOrderData={handleOrderData}
    />
  );
}

export { QueuesInProgress };
