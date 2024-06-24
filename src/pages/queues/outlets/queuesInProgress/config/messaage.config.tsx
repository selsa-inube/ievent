import { EAppearance } from "@src/components/feedback/RenderMessage/types";
import { MdOutlineSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";

export const generalMessage = {
    success: {
      id: 1,
      icon: <MdThumbUpOffAlt size={18} />,
      title: "Descarte exitoso!",
      description: "Hemos descartado correctamente la publicación",
      appearance: EAppearance.SUCCESS,
    },
    failed: {
      id: 2,
      icon: <MdOutlineSentimentNeutral size={18} />,
      title: "Algo salio mal!",
      description: "Tuvimos problemas para descartar la publicación",
      appearance: EAppearance.DANGER,
    },
  };
  