import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { IActions } from "@components/data/Table/props";
import { labelsModal } from "../../config/table";
import { IDiscardForMessage } from "../Discard/types";

interface IDetailsModalProps {
  data: IActions;
  setDataDiscardForMessage: (show: IDiscardForMessage) => void;
}

export const DetailsModal = (props: IDetailsModalProps) => {
  const { data, setDataDiscardForMessage } = props;

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Icon
        appearance="dark"
        icon={<MdOutlineRemoveRedEye />}
        size="16px"
        onClick={handleToggleModal}
        cursorHover
        spacing="none"
      />
      {showModal && data && (
        <InteractiveModal
          portalId="portal"
          title="Detalle"
          infoData={data}
          labels={labelsModal}
          setShowModal={setShowModal}
          infoTitle="Suscriptor"
          setDataDiscardForMessage={setDataDiscardForMessage}
          onCloseModal={handleToggleModal}
          handleReprocess={() => {}}
        />
      )}
    </>
  );
};
