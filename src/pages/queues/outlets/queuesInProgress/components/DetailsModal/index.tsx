import { useState } from "react";
import { Icon } from "@inubekit/icon";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { IActions } from "@components/data/Table/props";
import { labelsModal } from "../../config/table";


interface IDetailsModalProps {
  data: IActions;
}

export const DetailsModal = (props: IDetailsModalProps) => {
  const { data } = props;

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
