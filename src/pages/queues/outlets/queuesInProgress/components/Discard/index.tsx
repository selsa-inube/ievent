import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { IActions } from "@components/data/Table/props";
import { IDiscardEntry, IDiscardForMessage } from "./types";
import { DiscardUI } from "./interface";
import { deletePublication } from "./utils";

const validationSchema = Yup.object({
  discardJustification: Yup.string()
    .matches(/^[a-zA-ZÁ-Úá-úÑñ\s]*$/, "Este campo debe contener solo letras")
    .min(10, "Debe tener minimo 10 caracteres")
    .required("Este campo no puede estar vacío"),
});

interface DiscardProps {
  publication: IActions;
  setDataDiscardForMessage: (show: IDiscardForMessage) => void;
  onCloseInteractiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseDiscardModal: () => void;
}

const initialValues: IDiscardEntry = {
  discardJustification: "",
};

export const Discard = (props: DiscardProps) => {
  const {
    publication,
    setDataDiscardForMessage,
    onCloseInteractiveModal,
    onCloseDiscardModal,
  } = props;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: async () => true,
  });

  const dataComparison =
    JSON.stringify(initialValues.discardJustification) !==
    JSON.stringify(formik.values.discardJustification);

  const handleDiscard = () => {
    setLoading(true);
    let validateDiscard;
    const data = deletePublication(
      publication,
      formik.values.discardJustification
    );
    data
      .then((response) => {
        console.log(response);
        setDataDiscardForMessage({
          id: publication.id,
          successfulDiscard: response,
        });
      })
      .catch((error) => {
        console.error(error);
        setDataDiscardForMessage({
          id: publication.id,
          successfulDiscard: false,
        });
      });
    console.log("validateDiscard", validateDiscard);
    setLoading(false);
    onCloseInteractiveModal(false);
  };

  return (
    <DiscardUI
      formik={formik}
      loading={loading}
      dataComparison={dataComparison}
      handleDiscard={handleDiscard}
      onCloseModal={onCloseDiscardModal}
    />
  );
};
