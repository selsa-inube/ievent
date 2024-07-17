import styled from "styled-components";

interface StyledContainer {
  $smallScreen: boolean;
}

const StyledContainer = styled.div<StyledContainer>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  label,
  p {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 16px;
  }

  @media screen and (max-width: 500px) {
    div > div > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 8px;
    }
  }
`;

const StyledTextarea = styled.div`
  && div div:nth-child(2) {
    display: none;
  }
  && textarea {
    resize: none;
  }
`;

export { StyledContainer, StyledTextarea };
