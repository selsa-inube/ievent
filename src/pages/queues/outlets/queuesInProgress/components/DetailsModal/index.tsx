import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { IActions } from "@components/data/Table/props";
import { labelsModal } from "../../config/table";


export const DetailsModal = (data: IActions) => {

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
          infoTitle="Suscriptor"
          onCloseModal={handleToggleModal}
          handleReprocess={()=>{}}
        />
      )}
    </>
  );
};
