import { inube } from "@inubekit/foundations";
import styled from "styled-components";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledContainer = styled.div`
  position: relative;
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};

  width: ${(props) => (props.$smallScreen ? "280px" : "450px")};
  min-height: ${(props) => (props.$smallScreen ? "inherit" : "auto")};
  height: auto;
  border-radius: 16px;

  & > div {
    padding: ${(props) => (props.$smallScreen ? "16px" : "24px")};
  }
`;

const StyledModalFields = styled.div<IStyledModal>`
  display: flex;
  gap: 4px;
  flex-direction: column;
  hyphens: auto;

  div {
    min-height: 0px !important;
    margin-bottom: -8px !important;
  }

  @media screen and (max-width: 500px) {
    div {
      max-width: 200px;
    }

    p {
      word-break: break-all;
    }
  }
`;

export { StyledContainer, StyledModal, StyledModalFields };
