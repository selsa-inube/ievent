import { IActions } from "@components/data/Table/props";
import { ILabel } from "./types";
import { InteractiveModalUI } from "./interface";

interface InteractiveModalProps {
  portalId: string;
  title: string;
  infoData: IActions;
  labels: ILabel[];
  onCloseModal: () => void;
  handleReprocess: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  infoTitle: string;
}

 const InteractiveModal = (props: InteractiveModalProps)=> {
  const { portalId,
    title,
    infoData,
    labels,
    onCloseModal,
    handleReprocess,
    setShowModal,
    infoTitle,
    } = props;


  return(
    <InteractiveModalUI portalId={portalId}
    title={title}
    infoData={infoData}
    labels={labels}
    onCloseModal={onCloseModal}
    setShowModal={setShowModal}
    handleReprocess={handleReprocess}
    infoTitle={infoTitle}

    />
  )
  
};

export { InteractiveModal }

