import { IActions } from "@components/data/Table/props";
import { IDiscardForMessage } from "@pages/queues/outlets/queuesInProgress/components/Discard/types";

import { DiscardModalUI } from "./interface";

interface DiscardModalProps {
  portalId: string;
  infoData: IActions;
  setDataDiscardForMessage: (show: IDiscardForMessage) => void;
  onCloseInteractiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseDiscardModal: () => void;
}

const DiscardModal = (props: DiscardModalProps) => {
  const {
    portalId,
    infoData,
    setDataDiscardForMessage,
    onCloseInteractiveModal,
    onCloseDiscardModal,
  } = props;

  return (
    <DiscardModalUI
      portalId={portalId}
      infoData={infoData}
      setDataDiscardForMessage={setDataDiscardForMessage}
      onCloseInteractiveModal={onCloseInteractiveModal}
      onCloseDiscardModal={onCloseDiscardModal}
    />
  );
};

export { DiscardModal };
