import { IActions } from "@components/data/Table/props";
import { IDiscardForMessage } from "@pages/queues/outlets/queuesInProgress/components/Discard/types";
import { ILabel } from "./types";
import { InteractiveModalUI } from "./interface";

interface InteractiveModalProps {
  portalId: string;
  title: string;
  infoData: IActions;
  labels: ILabel[];
  setDataDiscardForMessage: (show: IDiscardForMessage) => void;
  onCloseModal: () => void;
  handleReprocess: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  infoTitle: string;
}

const InteractiveModal = (props: InteractiveModalProps) => {
  const {
    portalId,
    title,
    infoData,
    labels,
    setDataDiscardForMessage,
    onCloseModal,
    handleReprocess,
    setShowModal,
    infoTitle,
  } = props;

  return (
    <InteractiveModalUI
      portalId={portalId}
      title={title}
      infoData={infoData}
      labels={labels}
      setDataDiscardForMessage={setDataDiscardForMessage}
      onCloseModal={onCloseModal}
      setShowModal={setShowModal}
      handleReprocess={handleReprocess}
      infoTitle={infoTitle}
    />
  );
};

export { InteractiveModal };
