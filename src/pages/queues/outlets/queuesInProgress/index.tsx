import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { queuesInProgressForUser } from "@src/services";
import { QueuesInProgressUI } from "./interface";
import { IPublication } from "./types";
import { orderData } from "./utils";

function QueuesInProgress() {
  const { user } = useAuth0();
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
    if (!user) return;

    if (queues.length === 0) {
      setLoading(true);
      try {
        const newQueues = await queuesInProgressForUser(user.identification);
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
  }, [user]);

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
