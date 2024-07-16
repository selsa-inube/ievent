import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { Queues } from "@pages/queues";
import { QueuesInProgress } from "@src/pages/queues/outlets/queuesInProgress";

function QueuesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Queues />}>
        <Route path="/" element={<QueuesInProgress />} />
      </Route>
      <Route path="/service-error" element={<ErrorPage />} />
    </Routes>
  );
}

export { QueuesRoutes };
