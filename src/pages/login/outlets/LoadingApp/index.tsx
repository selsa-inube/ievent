import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { LoadingAppUI } from "./interface";

function LoadingApp() {
  const navigate = useNavigate();
 console.log("loading");
  useEffect(() => {
    const timer = setTimeout(() => {

      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingAppUI />;
}

export { LoadingApp };
