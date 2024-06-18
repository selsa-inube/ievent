import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { IActions } from "@components/data/Table/props";
import { IDiscardEntry } from "./types";
import { DiscardUI } from "./interface";
import { deletePublication } from "./utils";


const validationSchema = Yup.object({
  discardJustification: Yup.string()
    .matches(/^[a-zA-ZÁ-Úá-úÑñ\s]*$/, "Este campo debe contener solo letras")
    .min(10, "Debe tener máximo 10caracteres")
    .required("Este campo no puede estar vacío"),
});

interface DiscardProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  publication: IActions;
}

const initialValues: IDiscardEntry = {
  discardJustification: "",
};

export const Discard = (props: DiscardProps) => {
  const { setShowModal, publication } = props;
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
    const data = deletePublication(publication, formik.values.discardJustification)
    data.then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.error(error);
    })
    setLoading(false);
    setShowModal(false);

    }
    
    return (
    <DiscardUI
      formik={formik}
      loading={loading}
      dataComparison={dataComparison}
      handleDiscard={handleDiscard}
    />
  );
};
