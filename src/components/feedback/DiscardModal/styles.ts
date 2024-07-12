import { inube } from "@inubekit/foundations";
import styled from "styled-components";

interface IStyledModal {
  $smallScreen: boolean;
}

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

export { StyledModal };
