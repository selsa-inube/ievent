import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 ||
    inube.palette.neutral.N10};
  height: 100%;
  max-height: 190px;
  width: ${({ $smallScreen }) => ($smallScreen ? "312px" : "400px")};
  border-radius: 8px;
  margin: 20px;
  z-index: 3;
`;

export { StyledBackdropBlanket, StyledModal };
