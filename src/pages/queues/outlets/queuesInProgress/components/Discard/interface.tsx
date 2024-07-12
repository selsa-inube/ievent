import { FormikValues } from "formik";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textarea } from "@inubekit/textarea";
import { useMediaQuery } from "@inubekit/hooks";

import { StyledContainer, StyledTextarea } from "./styles";

interface DiscardUIProps {
  formik: FormikValues;
  loading: boolean;
  dataComparison: boolean;
  handleDiscard: () => void;
  onCloseModal: () => void;
}

const DiscardUI = (props: DiscardUIProps) => {
  const { formik, loading, dataComparison, handleDiscard, onCloseModal } =
    props;

  const isMobile = useMediaQuery("(max-width: 500px)");

  const getFieldState = (formik: FormikValues, fieldName: string) => {
    if (formik.errors[fieldName]) return "invalid";
  };

  return (
    <StyledContainer $smallScreen={isMobile}>
      <StyledTextarea>
        <Textarea
          label="Explique la razón por la que se descarta"
          name="discardJustification"
          id="discardJustification"
          placeholder="Escriba el porque desea descartar la publicación"
          value={formik.values.discardJustification}
          message={formik.errors.discardJustification}
          fullwidth
          status={getFieldState(formik, "discardJustification")}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </StyledTextarea>
      <Stack gap="8px" justifyContent="flex-end" alignItems="center">
        <Button appearance="light" variant="filled" onClick={onCloseModal}>
          Cancelar
        </Button>
        <Button
          type="submit"
          loading={loading}
          disabled={!dataComparison || !formik.isValid}
          onClick={handleDiscard}
        >
          Guardar
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export { DiscardUI };
