import { FormikValues } from "formik";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Textarea } from "@inubekit/textarea";
import { useMediaQuery } from "@inubekit/hooks";

import { StyledContainer } from "./styles";

interface DiscardUIProps {
  formik: FormikValues;
  loading: boolean;
  dataComparison: boolean;
  handleDiscard: () => void;
}

const DiscardUI = (props: DiscardUIProps) => {
  const { formik, loading, dataComparison, handleDiscard } = props;

  const isMobile = useMediaQuery("(max-width: 500px)");

  const getFieldState = (formik: FormikValues, fieldName: string) => {
    if (formik.errors[fieldName]) return "invalid";
  };

  return (
    <StyledContainer $smallScreen={isMobile}>
      <Textarea
        label="¿Desea descartar esta publicación?"
        name="discardJustification"
        id="discardJustification"
        placeholder="Escriba el porque desea descartar publicación"
        value={formik.values.discardJustification}
        message={formik.errors.discardJustification}
        fullwidth
        maxLength={220}
        status={getFieldState(formik, "discardJustification")}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required
      />
      <Stack>
        <Button
          type="submit"
          spacing="compact"
          loading={loading}
          disabled={!dataComparison || !formik.isValid}
          onClick={handleDiscard}
        >
          Aceptar
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export { DiscardUI };
