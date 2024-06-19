import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

import { InfoModal } from "@components/layout/modals/InfoModal";
import { IInfoModal } from "@components/layout/modals/InfoModal/types";
import { Icon } from "@inubekit/icon";

interface InfoActionsProps {
  data: IInfoModal[];
}

const InfoActions = (props: InfoActionsProps) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Icon
        appearance="primary"
        icon={<MdInfoOutline />}
        size="24px"
        onClick={handleToggleModal}
      />
      {showModal && (
        <InfoModal infoData={data} onCloseModal={handleToggleModal} />
      )}
    </>
  );
};

export { InfoActions };
export type { InfoActionsProps };
